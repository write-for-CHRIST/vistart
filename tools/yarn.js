const cp = require('child_process')

console.log('Checking dependencies...')
cp.spawnSync('yarn', ['install', '--no-progress'], { stdio: 'inherit' })
cp.spawnSync('yarn', ['start'], { stdio: 'inherit' })