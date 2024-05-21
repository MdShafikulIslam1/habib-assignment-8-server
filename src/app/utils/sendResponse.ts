import { Response } from 'express'

type TResponse<T> = {
  statusCode: number
  success: boolean
  message: string
  data?: T
}

const sendResponse = <T>(res: Response, responseData: TResponse<T>) => {
  return res.status(responseData.statusCode).json({
    status: responseData.statusCode,
    success: responseData.success,
    message: responseData.message,
    data: responseData.data,
  })
}
export default sendResponse
