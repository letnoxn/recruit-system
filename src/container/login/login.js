import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile"
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(state => state.user,
    { login }
)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }

    }

    register() {

        this.props.history.push('/register')
        console.log(this.props.history)
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin() {
        this.props.login(this.state)
    }

    render() {
        return (<div>
            {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
            <Logo></Logo>
            <h2>登12</h2>
            <WingBlank>
                <List>
                    {this.props.msg ? <p className="erro-msg">{this.props.msg}</p> : null}

                    <InputItem
                        onChange={v => this.handleChange('user', v)}
                    >用户</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('pwd', v)}
                    >密码</InputItem>
                </List>
                <Button onClick={this.handleLogin.bind(this)} type='primary'>登录</Button>
                <WhiteSpace />
                <Button onClick={this.register.bind(this)} type='primary'>注册</Button>
            </WingBlank>
        </div>
        )
    }
}


export default Login