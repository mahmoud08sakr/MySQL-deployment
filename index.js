import express, { json } from 'express'

import userRouter from './src/modeules/User/user.router.js'
const app = express()
const port = 8080

app.use(json())

app.use('/users', userRouter)


app.listen(port, () => console.log(`Example app listening at http://localhost:8080`))