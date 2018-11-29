import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile"
class Login extends React.Component {
    constructor(props) {
        super(props);
       
       
    }
    register() {
        
        this.props.history.push('/register')
        console.log(this.props.history)
    }

    render() {
        return (<div>





            <Logo></Logo>
            <h2>登陆页</h2>
            <WingBlank>
                <List>
                    <InputItem>用户</InputItem>
                    <InputItem>密码</InputItem>
                </List>
                <Button type='primary'>登录</Button>
                <WhiteSpace />
                <Button onClick={this.register.bind(this)} type='primary'>注册</Button>
            </WingBlank>
        </div>
        )
    }
}

export default Login