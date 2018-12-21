import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import { Switch, Route } from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'

function Msg() {
    return <h2>消息列表</h2>
}
function User() {
    return <h2>个人中心</h2>
}


@connect(
    state => state
)
class Dashboard extends React.Component {

    render() {
        const { pathname } = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,

            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            }
        ]
        return (
            <div>
                {pathname == '/boss' || pathname == '/genius' || pathname == '/msg' || pathname == '/me' ? <NavBar className='fixd-header' mode='dard'>{navList.find(v => v.path === pathname).title}</NavBar> : <h2>404</h2>}
                <div style={{ marginTop: '45px' }}></div>
                <Switch>
                    {navList.map(v =>(
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                    ))}
                </Switch>

                <NavLinkBar className='am-navbar' data={navList}></NavLinkBar>
            </div>



        )
    }

}
export default Dashboard