const cp = require('child_process')

console.log('Checking dependencies...')
cp.spawnSync('npm', ['install'], {stdio: 'inherit'})
cp.spawnSync('npm', ['start'], {stdio: 'inherit'})
