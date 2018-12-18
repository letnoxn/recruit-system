const express = require('express')
const Router = express.Router()
const model = require('./model')
const User=model.getModel('user')

Router.get('/list',function(req,res){
    const {type} =req.query
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.post('/update',function(req,res){
    const userid=req.cookies.userid
    if(!userid){
       return res.json({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data=Object.assign({},{
            user:doc.ueser,
            type:doc.type
        },body)
        return res.json({code:0,data})
    })
})
Router.use('/login',function(req,res){
    console.log(req.query)
    const {user,pwd}=req.query
    User.findOne({user:user,pwd:pwd},{pwd:0},function(err,doc){
        if(!doc){
           
            return res.json({code:1,msg:'用户名不存在或密码错误'})
        }
         res.cookie('userid',doc._id)
         return res.json({code:0,data:doc})
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
            res.cookie('userid',doc._id)
            return res.json({code:0})
        })
    })
})


Router.get('/info',function(req,res){
    //用户有没有cookie
    const {userid}=req.cookies
    if(!userid){
    return res.json({code:1})
    }
    User.findOne({_id:userid},function(err,doc){
        if(err){
            return res.json({code:1,msg:'后端出错'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

module.exports=Router