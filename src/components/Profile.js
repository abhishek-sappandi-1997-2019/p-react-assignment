import React, { Component } from 'react'
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withRouter , Link} from 'react-router-dom'
import {startGetUsers} from '../actions/userAction'
import Avatar from '@material-ui/core/Avatar';
import ProfileDetails from './ProfileDetails'
import ProfileAddress from './ProfileAddress'
import Button from '@material-ui/core/Button';

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            users : [] 
        }
    }

    /**
     * lifecycle method to get all the users
     */
    componentDidMount(){
        //console.log('first');
        if(!this.props.user){
            this.props.dispatch(startGetUsers())
        }
    }
    render() {
        return (
            <>
            {
                this.props.user ? 
                <div style={{ display : 'flex', justifyContent : 'space-between' }}>
                    <h3 style={{ padding : '10px' }}>Profile</h3>
                    <h3 style={{ display : 'flex', justifyContent : 'flex-start'}}>
                        <Avatar alt="profile pic" src={this.props.user.profilepicture}/>
                        <p style={{ margin : '10px' }}>{this.props.user.name}</p>
                        <small>
                            <Button variant="contained" color="secondary">
                            <Link style={{ textDecoration: 'none', color :'white'}} to='/'>Sign Out</Link>
                            </Button>
                        </small>
                    </h3>
                </div>  : 
                <h1>loading</h1>
            }
            <hr/>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <ProfileDetails data = {this.props.user}/>
                    <hr/>
                </Grid>
                <Grid item xs={8}>
                    <ProfileAddress data = {this.props.user}/>
                </Grid>
            </Grid>
            </>
        )
    }
}
const mapStateToPrps = (state,props) =>{
    const userid = props.history.location.pathname.slice(6) // 9
    //console.log("profile",userid);
    return {
        // filtering the selected user
        user : state.user.find(e => Number(e.id) === Number(userid))
    }
}
export default withRouter(connect(mapStateToPrps)(Profile))