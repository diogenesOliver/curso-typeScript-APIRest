require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()
const PORT = config.get<number>('port')

app.use(express.json())

import db from '../config/db'
import router from './router'
import Logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)
app.use('/api/', router)

app.listen(PORT, async () => {
    await db()

    Logger.info(`Server run on  PORT: ${PORT}`)
})