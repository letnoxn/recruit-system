const express = require('express')
const Router = express.Router()
const model = require('./model')
const User=model.getModel('user')

Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})

Router.use('/register',function(req,res){
    console.log(req.query)
    const {user,pwd,type}=req.query
    User.findOne({user:user},function(err,doc){
        if(doc){
           
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,pwd,type},function(err,doc){
            if(err){
                return res.json({code:1,msg:'后端出错'})
            }
            return res.json({code:0})
        })
    })
})


Router.get('/info',function(req,res){
    //用户有没有cookie
    return res.json({code:1})
})

module.exports=Router