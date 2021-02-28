import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom'
import {startGetUsers} from '../actions/userAction'
import {connect} from 'react-redux'

import './Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            users : [] 
        }
    }
    componentDidMount(){
        if(this.props.user.length === 0 ){
            this.props.dispatch(startGetUsers())
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.user.length < 0 ? 
                    <h2>loading..</h2> : 
                    (
                        <Card className="root" size='10px'>
                        <CardContent>
                            <Typography component="span">
                                <h2 align='center'>Select a Account</h2>
                                {this.props.user.map((user) => {
                                    return (
                                    <div key={user.id} style={{ display : 'flex' }}> 
                                        <Avatar alt="profile pic" src={user.profilepicture}/>
                                        <Link style={{ textDecoration: 'none' ,padding : '10px' , color :'grey'}} to={`/menu/${user.id}`}>{user.name}</Link>
                                        <br/>
                                    </div>
                                    )
                                })}
                            </Typography>
                        </CardContent>
                        </Card>
                    )
                }
            </div>
        );
    }
}
const mapStateToPrps = (state) =>{
    return {
        user : state.user,
    }
}
export default connect(mapStateToPrps)(Home)