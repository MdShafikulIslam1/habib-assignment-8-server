import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

async function main() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, () => {})
    //eslint-disable-next-line no-console
    console.log('DATABASE CONNECTED')
    //eslint-disable-next-line no-console
    console.log('app running on port ', config.port)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('run error', error)
  }
}

main()
