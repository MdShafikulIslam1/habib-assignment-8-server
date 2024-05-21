import { NextFunction, Request, RequestHandler, Response } from 'express'

const asyncHandler = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn(req, res, next)
    } catch (error) {
      next(error)
    }
    // Promise.resolve(fn(req, res, next)).catch(error => next(error))
  }
}

export default asyncHandler
