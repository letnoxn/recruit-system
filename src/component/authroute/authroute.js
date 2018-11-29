import React from 'react'
import Axios from 'axios';
import {withRouter} from 'react-router-dom'

 

class AuthRoute extends React.Component{
    componentDidMount(){
       const publicList=['/login','/register']
       const pathname=this.props.location.pathname
       if (publicList.indexOf(pathname)>-1){
           return null
       }


        //获取用户信息
       Axios.get('/user/info').
         then(res=>{
             if(res.status==200){
                 if(res.data.code==0){
                     //有登录信息
                     
                 }else{
                   this.props.history.push('/login')
                 }
               console.log(res.data)  
             }
         })
        //是非登录
        //现在的url地址 login是不需要跳转的
        //用户的type 身份是Boss还是牛人
        //用户是否完善信息 (选择头像 个人简介)
     
    }
    render(){
        return null
    }
}

const newComponent=withRouter(AuthRoute)
export default newComponent