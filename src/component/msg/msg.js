import React from 'react'
import { connect } from 'react-redux'
import { List,Badge } from 'antd-mobile'
@connect(
    state => state
)
class Msg extends React.Component {
    getLast(arr) {
        return arr[arr.length - 1]
    }
    render() {
        // if (!this.props.chat.chatmsg.length){
        //        return
        //   }

        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        //按聊天用户分组
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })

        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLast(a).create_time
            const b_last = this.getLast(b).create_time
            return b_last-a_last
        }) 
      
        return (
            <div>

                {chatList.map(v => {
                    const lastItem = this.getLast(v)
                    const targetId = v[0].from == userid ? v[0].to : v[0].from
                    const unreadNum = v.filter(v=>!v.read&&v.to===userid).length

                    const name = this.props.chat.users[targetId].name 
                    const avatar = this.props.chat.users[targetId].avatar
                    if(!this.props.chat.users[targetId]){
                        return null
                    }
                    return (
                        <List key={lastItem._id}>
                            <Item
                                extra={<Badge text={unreadNum} />}
                                thumb={require(`../img/${avatar}.jpg`)}
                                arrow='horizontal'
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                            >
                                {lastItem.content}

                                <Brief>{name}</Brief>

                            </Item>
                        </List>
                    )
                })}


            </div>
        )
    }
}

export default Msg