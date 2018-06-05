const {promisify} = require('util')
const {copyFile} = require('fs')
const {join} = require('path')
const ora = require('ora')
const program = require('commander')
const {indexOf} = require('lodash')
const {ncp} = require('ncp')

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

const batchPackageJson = async ({}) => {}

const batchDockerCompose = async ({}) => {}

const generate = async () => {
  program
    .version('0.1.0')
    .arguments('<service_name> <main_module> <template_name>')
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
    await copyTemplate({templateName, serviceName, moduleName})
    spinner.succeed(`Generated ${serviceName} in ${moduleName}`)
  }
}

generate()
  .then(() => {
    spinner.stop()
  })
  .catch(err => spinner.fail(err.message))
