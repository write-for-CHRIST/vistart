const {promisify} = require('util')
const {copyFile} = require('fs')
const {join} = require('path')
const ora = require('ora')
const program = require('commander')
const {toPairs, sortBy, fromPairs, map, indexOf} = require('lodash')
const {ncp} = require('ncp')
const readPkg = require('read-pkg')
const writePkg = require('write-pkg')

// Constants
const PREDEFINED_MODULE = ['server', 'client', 'lib']
const rootDir = join(__dirname, '../')
const templateDir = join(rootDir, '.templates')

// Promisify Node API
const copyFileAsync = promisify(copyFile)
const ncpAsync = promisify(ncp)

// CLI
const spinner = ora('Generating...').start()

//#region Helpers
/**
 * Get main module absolute path
 * @param {string} moduleName
 */
const getModulePath = moduleName =>
  indexOf(PREDEFINED_MODULE, moduleName) > -1 ? join(rootDir, moduleName) : join(rootDir, 'custom')

//#endregion

/**
 * Copy template folder to main folder.
 * TODO: We should move templates to separate repository.
 */
const copyTemplate = async ({templateName, serviceName, moduleName}) => {
  const source = join(templateDir, templateName)
  const dest = join(getModulePath(moduleName), serviceName)
  spinner.text = 'Copying template...'
  await ncpAsync(source, dest)
  spinner.succeed(`Copied template ${templateName} to ${dest}...`)
}

//#region Package.json Scripts
const scriptPackageAdd = ({moduleName, serviceName}) => ({
  [`add:${serviceName}`]: `docker-compose run --rm --no-deps ${moduleName}_${serviceName} yarn add`,
})
const scriptPackageRemove = ({moduleName, serviceName}) => ({
  [`remove:${serviceName}`]: `docker-compose run --rm --no-deps ${moduleName}_${serviceName} yarn remove`,
})
const scriptPackageTest = ({moduleName, serviceName}) => ({
  [`test:${serviceName}`]: `docker-compose run ${moduleName}_${serviceName} yarn && cd ${moduleName}/${serviceName} && yarn test`,
})
const scriptDockerExec = ({moduleName, serviceName}) => ({
  [`exec:${serviceName}`]: `docker-compose exec ${moduleName}_${serviceName}`,
})
const scriptDockerEnter = ({moduleName, serviceName}) => ({
  [`enter:${serviceName}`]: `yarn exec:${serviceName} /bin/sh`,
})
const scriptDockerRestart = ({moduleName, serviceName}) => ({
  [`restart:${serviceName}`]: `docker-compose restart ${moduleName}_${serviceName}`,
})

const buildScript = p => ({
  ...scriptPackageAdd(p),
  ...scriptPackageRemove(p),
  ...scriptPackageTest(p),
  ...scriptDockerExec(p),
  ...scriptDockerEnter(p),
  ...scriptDockerRestart(p),
})

const sortScripts = ({scripts}) => fromPairs(sortBy(toPairs(scripts)))

const batchPackageJson = async ({moduleName, serviceName}) => {
  const pkg = await readPkg()
  pkg.scripts = sortScripts({scripts: {...pkg.scripts, ...buildScript({moduleName, serviceName})}})
  await writePkg(pkg)
  spinner.succeed(`Added ${serviceName} scripts to package.json`)
}
//#endregion

const batchDockerCompose = async ({}) => {}

const generate = async () => {
  program
    .version('0.1.0')
    .arguments('<service_name> <main_module> <template_name>')
    .option('-d, --debug', 'Debugging (Not execute)')
    .action((service_name, main_module, template_name) => {
      serviceName = service_name
      moduleName = main_module
      templateName = template_name
    })
  program.parse(process.argv)

  if (typeof serviceName === 'undefined') {
    spinner.fail('No service name provided!')
    process.exit(1)
  } else if (typeof moduleName === 'undefined') {
    spinner.fail('No main module provided, please specify "server" or "client"!')
    process.exit(1)
  } else if (typeof templateName === 'undefined') {
    spinner.fail('No template name provided, please check .templates directory!')
    process.exit(1)
  } else {
    await batchPackageJson({serviceName, moduleName})
    if (!program.debug) {
      await copyTemplate({templateName, serviceName, moduleName})
      spinner.succeed(`Generated ${serviceName} in ${moduleName}`)
    }
  }
}

generate()
  .then(() => {
    spinner.stop()
  })
  .catch(err => {
    console.error(err)
    spinner.fail(err)
  })
