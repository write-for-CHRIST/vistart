const cp = require('child_process')

console.log('Checking dependencies...')
const start = async () => {
  return new Promise((resolve, reject) => {
    const npm = cp.spawn('npm', ['install'], {stdio: 'inherit'})
    npm.on('close', code => {
      code === 0 ? resolve() : reject()
    })
  })
}

start()
  .then(cp.spawnSync('npm', ['start'], {stdio: 'inherit'}))
  .catch(err => console.error(err))
