const cp = require('child_process')

console.log('Checking dependencies...')
cp.spawnSync('npm', ['install', '--quiet'], { stdio: 'inherit' })
cp.spawnSync('npm', ['start'], { stdio: 'inherit' })