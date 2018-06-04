const util = require('util')
const ora = require('ora')
const hasbin = require('hasbin')
const {copyFile, readdirSync, existsSync} = require('fs')
const {spawn} = require('child_process')
const {join} = require('path')
const {forEach, filter} = require('lodash')
const copyFileAsync = util.promisify(copyFile)

const {GLOBAL_BINS} = require('./config')

const spinner = ora('Setting up project...').start()

const spawnAsync = cmd =>
  new Promise((resolve, reject) => {
    const commandSplitter = cmd.split(' ')
    const p = spawn(commandSplitter[0], commandSplitter.slice(1, commandSplitter.length))
    p.stdout.on('data', data => {
      console.log(`Log: ${data}`)
    })
    p.stderr.on('data', data => {
      console.error(`Err: ${data}`)
    })
    p.on('close', code => {
      code === 0 ? resolve() : reject()
    })
  })

const checkTools = async ({bins}) => {
  spinner.text = 'Checking tools...'
  const allCmds = []
  let i = bins.length
  while (i--) {
    const isExisted = hasbin.sync(bins[i].cmd)
    if (!isExisted) {
      spinner.text = `Exec: ${bins[i].install}`
      allCmds.push(await spawnAsync(bins[i].install))
    }
  }
  return Promise.all(allCmds)
}

const copyEnvFiles = async () => {
  const source = join(__dirname, '../envs/sample')
  const dest = join(__dirname, '../envs')
  const files = readdirSync(source)
  const sampleEnvs = files.filter(file => /\.sample$/.test(file))

  const allCopies = []
  forEach(sampleEnvs, file => {
    const oldPath = join(source, file)
    const newPath = join(dest, file.replace('.sample', ''))
    if (!existsSync(newPath)) {
      spinner.text = `Copying ${file}...`
      allCopies.push(copyFileAsync(oldPath, newPath))
    } else {
      spinner.text = `Skip copy ${file}!`
    }
  })
  await Promise.all(allCopies)
}

const init = async () => {
  await copyEnvFiles()
  spinner.succeed('Copied env files!')
  await checkTools({bins: GLOBAL_BINS})
  spinner.succeed('All required tools installed!')
}

init()
  .then(() => {
    spinner.succeed('Solution has been initialized!')
    spinner.stop()
  })
  .catch(err => spinner.fail(err.message))
