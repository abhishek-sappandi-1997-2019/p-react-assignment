import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/ConfigureStore'

const store = configureStore()
//console.log('initial state',store.getState())

store.subscribe(()=>{
    //console.log(store.getState())
})

const jsx = (
    <Provider store={store}><App/></Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))