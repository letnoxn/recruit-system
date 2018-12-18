import React from 'react'
import { Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    static PropTypes={
        selectAvatar:PropTypes.func.isRequired
    }


    constructor(props) {
        super(props)
        this.state = {
        }
    }

   
    render() {
        const avatarList = 'boy,bull,chick,fj'
            .split(',')
            .map(v => ({
                icon: require(`../img/${v}.jpg`),
                text: v
            }))


        const gridHeader = this.state.text
            ? (<div>

                <span>头像已选择：</span>
                <img src={this.state.icon}  style={{'height':'30px' }}></img>
            </div>)
            : '请选择头像'


        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid data={avatarList}
                        
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}


                    />
                    
                </List>





            </div>
        )
    }
}

export default AvatarSelector