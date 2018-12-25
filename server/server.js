
const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const path = require('path')
const app=express()
//work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
   console.log('user login')
   socket.on('sendmsg',function(data){
       console.log(data)
       io.emit('recvmsg',data)
   })
})



const userRoutre=require('./user')



//app.use(express.static(path.join(__dirname,'./build')))
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRoutre)
server.listen(8080)