import { Middleware, send } from 'h3'
import apicache from 'apicache'

const cache = apicache.middleware

const middleware: Middleware = (req, res, next) => {
  // return cache('5 minutes')
  next()
}

export default middleware