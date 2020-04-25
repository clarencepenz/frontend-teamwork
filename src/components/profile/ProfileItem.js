import React, { Component } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Profile.css'
import logo from './logo.svg'
import Login from '../users/login/Login';


class ProfileItem extends Component {
    state ={
        name: 'no name',
        about: 'say something',
        url: null,
        github: '',
        twitter: '',
        facebook: '',
        loading: true

    }

    componentDidMount(){
        const uid = localStorage.userId
        const token = localStorage.token
        const expToken = localStorage.expiration
        axios.get(`http://localhost:3000/api/v1/auth/profile/${uid}`, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
           if(expToken > expToken){
               return <Login/>
           }else{
               return(
                this.setState({
                    name: res.data[0].username,
                    about: res.data[0].about,
                    url: res.data[0].url,
                    facebook: res.data[0].facebook,
                    github: res.data[0].github,
                    twitter: res.data[0].twitter,
                    loading: false
                })
               )
           }
        })
        
        
    }

  
    
    render() {
        const {url, github, twitter, facebook,} = this.state
       
        return (
            <div className='Profile'>
                <div className="Profile-img">
                    <img src={url ? url : logo} className="Profile-logo" alt="logo" />
                </div>
                <h3 ><Link className='Profile-Edit' to ={"/profile/edit"}>Edit</Link></h3>
                <div className='Profile-info'>
                   <h3 className='Profile-Name'>{this.state.name}</h3>
                    <p className='Profile-About'>{this.state.about}</p>
                    <ul style={{display: 'flex', paddingTop: '10px'}}>
                        <li >{twitter ? <SocialMediaIconsReact icon="twitter" roundness={50}  size={30} iconSize={1} url={'https://twitter.com/' + twitter}/> : ''}</li>
                        <li >{github ? <SocialMediaIconsReact icon="github" roundness={50}  size={30} iconSize={1} url={'https://github.com/' + github}/> : ''}</li>
                        <li >{facebook ? <SocialMediaIconsReact icon="facebook" roundness={50}  size={30} iconSize={1} url={'https://facebook.com/' + facebook}/> : ''}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

 
export default ProfileItem;