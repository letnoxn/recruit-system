import Axios from "axios";
import {getRedirectPath} from '../util'

const RGISTER_SUCCESS='RGISTER_SUCCESS'
const ERROR_MSG='ERROR_MSG'
const LOGIN_SUCCESS="LOGIN_SUCCESS"
const initState={
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''

}


export function user (state=initState,action){
    switch(action.type){
        case RGISTER_SUCCESS:
        return    {...state,mag:'',redirectTo:getRedirectPath(action.payload), isAuth:true,...action.payload} 
        case LOGIN_SUCCESS:
        return  {...state,mag:'',redirectTo:getRedirectPath(action.payload), isAuth:true,...action.payload} 
        case ERROR_MSG:
         return {...state,isAuth:false,msg:action.msg}
        default:
              return state
    }
   
}

function registerSuccess(data){
    return {type:RGISTER_SUCCESS,payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCCESS,payload:data}
}


function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function login({user,pwd}){
    if (!user||!pwd){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch=>{
        Axios.get('/user/login',{params:{user,pwd}})
        .then(res=>{
             if(res.status==200&&res.data.code===0){
                     dispatch(loginSuccess(res.data.data))
            }else{
                     dispatch(errorMsg(res.data.msg))
            }
        })

        
    }
    
}



export function regisger({user,pwd,repeatpwd,type}){
    if (!user||!pwd||!type){
        return errorMsg('用户名密码必须输入')

    }
    if(pwd!==repeatpwd){
        return errorMsg('确认密码不一致')
    }

    return dispatch=>{
        Axios.get('/user/register',{params:{user,pwd,type}})
        .then(res=>{
             if(res.status==200&&res.data.code===0){
                     dispatch(registerSuccess({user,pwd,type}))
            }else{
                     dispatch(errorMsg(res.data.msg))
            }
        })

        
    }
    
}