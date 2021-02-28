import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'

class ProfileAddress extends Component {
    constructor(){
        super()
        this.state = {
            loaction : ''
        }
    }

    /**
     * get the map url based on the latitude and longitude
     */
    findLocation = () =>{
        axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=FBf8pJOA8s6wadHEUxWe5Rnvcb2sr4bv&location=${this.props.data.address.geo.lat},${this.props.data.address.geo.lng}&includeRoadMetadata=true&includeNearestIntersection=true`)
        .then((response)=>{
          const data = response.data
           this.setState({ location : data.results[0].locations[0].mapUrl}) 
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    /**
     * 
     * @param {get the map when reload the page} prevProps 
     */
    componentDidUpdate(prevProps){
        if( prevProps.data !== this.props.data){
                this.findLocation()
        }   
    }

    /**
     *get the map after first render 
     */
    componentDidMount(){
        if(this.props.data){
                this.findLocation()
        } 
    }
    render() {
        return (
            <>
            {
            this.props.data ? 
                <div>
                    <h3 className='grey'>Address : </h3>
                    <div style={{ margin:'20px'}}>
                    <h3 className='grey'>Street :<b className='black'>{this.props.data.address.street}</b></h3>
                    <h3 className='grey'>Suite :<b className='black'>{this.props.data.address.suite}</b></h3>
                    <h3 className='grey'>City :<b className='black'>{this.props.data.address.city}</b></h3>
                    <h3 className='grey'>Zipcode :<b className='black'>{this.props.data.address.zipcode}</b></h3>
                    { 
                        this.state.location ? 
                        <>
                            <img alt='profile image' src={this.state.location} style={{ width:'60%', height:'10%' }}/>
                            <p className='grey'>
                                Lat:<b className='black'>{this.props.data.address.geo.lat}</b>{" "}
                                Long:<b className='black'>{this.props.data.address.geo.lng}</b>
                            </p>
                        </> :
                         <h2>'Loading Map.....'</h2>
                    }

                    </div>
                </div> :
                <h2>Loading...</h2>
            }
            </>
        )
    }
}
export default ProfileAddress