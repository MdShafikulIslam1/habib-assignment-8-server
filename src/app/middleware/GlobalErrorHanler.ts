/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = err.StatusCode || 500
  const message = err.message || 'something went wrong'
  return res.status(statusCode).json({
    status: statusCode,
    success: false,
    message: message,
    err,
  })
}
export default globalErrorHandler
