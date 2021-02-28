import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Link } from 'react-router-dom'

import Home from './components/Home'
import Posts from './components/Posts'
import Gallery from './components/Gallery'
import Todo from './components/Todo'
import VerticalMenu from './components/VerticalMenu'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to='/' />

                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/menu/:id' component={VerticalMenu} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/gallery' component={Gallery} />
                    <Route path='/todo' component={Todo} />
                </Router>
            </div>
        )
    }
}
export default App