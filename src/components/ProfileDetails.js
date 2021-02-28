import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Home.css'

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(22),
      height: theme.spacing(22),
      left : '100px'
    },
  }));

function ProfileDetails(props) {
    const classes = useStyles();
    return (
        <>
        {
            props.data ? 
                <div>
                    <Avatar align='center' alt="profile pic" src={props.data.profilepicture} className={classes.large}/><br/>
                    <h3 align='center'>{props.data.name}</h3>
                    <div >
                    <h3 className='grey'>Username :<b className='black'>{props.data.username}</b></h3>
                    <h3 className='grey'>e-mail : <b className='black'>{props.data.email}</b></h3>
                    <h3 className='grey'>Phone : <b className='black'>{props.data.phone}</b></h3>
                    <h3 className='grey'>Website : <b className='black'>{props.data.website}</b></h3>
                    <hr/>
                    <h3 align='center'>Company</h3>
                    <h3 className='grey'>Name : <b className='black'>{props.data.company.name}</b></h3>
                    <h3 className='grey'>catchphrase : <b className='black'>{props.data.company.catchPhrase}</b></h3>
                    <h3 className='grey'>bs : <b className='black'>{props.data.company.bs}</b></h3>
                    </div>
                </div> :
                <h2>Loading...</h2>
        }
        </>
    )

}
export default ProfileDetails