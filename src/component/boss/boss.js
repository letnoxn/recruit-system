import React from 'react'
import Axios from 'axios';
import reducer from '../../reducer';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
class Boss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Axios.get('/user/list?type=genius')
            .then(res => {
                if (res.data.code == 0) {
                    this.setState({ data: res.data.data })
                }
            })
    }
    render() {
        return (
            <WingBlank>
              {this.state.data.map(v=>(
                  v.avatar?(<Card>
                      <Card.Header 
                        title={v.user}
                        thumb={require(`../img/${v.avatar}.jpg`)}
                        extra={<span>{v.title}</span>}
                      
                      ></Card.Header>
                  </Card>):null
              ))}
            </WingBlank>
        )
    }

}

export default Boss