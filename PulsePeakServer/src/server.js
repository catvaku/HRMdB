import http, { IncomingMessage, ServerResponse } from 'node:http'
import { readConfig } from './utils/config.js'
import { LogManager, Log } from './utils/log.js'
import { WebSocketServer } from 'ws'

LogManager.init('./logs')

let log = new Log('Server')

let clients = {
  'user1': 'pass1'
}

function checkAuth(headers) {
  // check if Authorization header/cookie is present
  console.log(headers)
  if ( headers['authorization'] ) {
    let up = atob(headers['authorization'].split(' ')[1])
    let user = up.slice(0, up.indexOf(':'))
    let pass = up.slice(user.length+1)
    console.log({user, pass})
    if ( clients[user] == pass )
    {
      return true
    }
    return false
  }
}

/**
 * Handle Incomming HTTP Request
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function handleServer(req, res)
{
  log.d(`Incomming HTTP:`, req.socket.address())
  
  if ( !checkAuth(req.headers) )
  {
    res.setHeader('WWW-Authenticate', 'Basic realm="EEAAO"')
    res.statusCode = 401
    res.end('401')
    return
  }

  if ( req.headers['upgrade'] == 'websocket' ) {
    const { pathname } = new URL(request.url)
    
  }

  res.end('Hello')
}

let server = http.createServer(handleServer)

readConfig()
.then(
  config =>
  {
    server.listen(8181, '0.0.0.0', _ => {
      log.d(`Server Started:`, server.address())
    })
  }
)

