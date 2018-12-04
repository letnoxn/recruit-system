import React from 'react';
import ReactDOM from 'react-dom';

//调试引入compose
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'


import reducers from './reducer'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import './config'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    //redux调试
    window.devToolsExtension ? window.devToolsExtension() : f => f

))

function Boss(){
    return <h2>Boss页面</h2>
}


ReactDOM.render(

    <Provider store={store} >
        <BrowserRouter>

            <div>
                <AuthRoute></AuthRoute>
                <Route path='/bossinfo' component={BossInfo}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                
            </div>

        </BrowserRouter>




    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

