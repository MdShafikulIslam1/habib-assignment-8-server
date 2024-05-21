import express from 'express'
import cors from 'cors'
import notFound from './app/middleware/notFound'
import router from './app/routes'
import sendResponse from './app/utils/sendResponse'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middleware/GlobalErrorHanler'
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Welcome to event 360 backend',
  })
})

app.use('/api', router)

// not found route
app.use(notFound)

// global error handler
app.use(globalErrorHandler)

export default app
