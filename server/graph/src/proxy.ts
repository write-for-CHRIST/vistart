import * as http from 'http'
import * as httpProxy from 'http-proxy'

export const startProxyServer = () => {
  return new Promise((resolve) => {
    const proxy = httpProxy.createProxyServer({})
    const target = process.env.PRISMA_PROXY_ENDPOINT

    const server = http.createServer((req, res) => {
      proxy.web(req, res, {target})
    })

    console.log(`Proxy server is mapping ${target} to http://localhost:4466`)

    server.listen(4466, () => {
      resolve()
    })
  })
}
