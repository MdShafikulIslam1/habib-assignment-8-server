import cors from 'cors'
import express from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middleware/GlobalErrorHanler'
import notFound from './app/middleware/notFound'
import router from './app/routes'
import sendResponse from './app/utils/sendResponse'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.get('/', (req, res) => {
  return sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Welcome to event 360 backend',
  })
})

// not found route
app.use(notFound)

// global error handler
app.use(globalErrorHandler)

export default app
