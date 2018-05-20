const cp = require('child_process')

console.log('Checking dependencies...')
cp.spawnSync('yarn', ['install', '--no-progress'], { stdio: 'inherit' })

if (process.env.NODE_ENV === 'production') {
  cp.spawnSync('yarn', ['start:prod'], { stdio: 'inherit' })
} else {
  cp.spawnSync('yarn', ['start:dev'], { stdio: 'inherit' })
}