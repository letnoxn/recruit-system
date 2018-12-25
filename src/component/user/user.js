import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'

@connect(
    state => state.user
)
class User extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout() {
        const alert = Modal.alert

        alert('注销', '你丫确认退出登录吗？', [
            { text: 'Cancel', onPress: null},
            {
                text: 'Ok', onPress: () => {
                    document.cookie = `userid=1;expires=-1`
                    window.location.reload()
                }
            }
        ])


    }

    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief

        return props.user ? (
            <div>

                <Result
                    img={<img src={require(`../img/${props.avatar}.jpg`)} style={{ width: '50px' }} alt="" />}
                    title={props.user}
                    message={props.type === 'boss' ? props.company : null}
                />
                <List renderHeader={() => '简介'}>
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {this.props.desc.split('\n').map(v => <Brief key={v}></Brief>)}
                        {props.money ? <Brief>薪资：{props.money}</Brief> : null}
                    </Item>


                </List>
                <WhiteSpace></WhiteSpace>
                <List >
                    <Item onClick={this.logout}> 退出登录</Item>

                </List>
            </div>
        ) : null
    }
}

export default User