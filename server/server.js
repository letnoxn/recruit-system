
const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const path = require('path')


const userRoutre=require('./user')


const app=express()
app.use(express.static(path.join(__dirname,'../build')))
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRoutre)
app.listen(8080)