import React, { Component } from 'react'
import axios from 'axios'
import EditProfle from '../components/profile/EditProfile'

export default class Profile extends Component {
    state = {
        users: []
    }

    EditProfile = (name, about) => {
        const data = {
            name,
            about
        }

        const token = localStorage.token
        const uid = localStorage.userId
       // const author_id = localStorage.authorId

        axios.put(`http://localhost:3000/api/v1/auth/profile/${uid}`, data, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        }).then(res => {
            res.data.name = name
            res.data.about = about
            
            this.setState({users:  res.data})
        })  
        .catch(err => console.log(err))

       
    }


    EditSocial = (twitter, github, facebook) => {
        const data = {
            github,
            facebook,
            twitter
        }

        const token = localStorage.token
        const uid = localStorage.userId
    

        axios.put(`http://localhost:3000/api/v1/auth/profile-social/${uid}`, data, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        }).then(res => {
            res.data.github = github
            res.data.facebook = facebook
            res.data.twitter = twitter
            
            this.setState({users:  res.data})
        })  
        .catch(err => console.log(err))

       
    }


    EditUrl = ( url) => {
        const data = new FormData()
        data.append('url',  url)
     
        const token = localStorage.token
        const uid = localStorage.userId
       // const author_id = localStorage.authorId

        axios.put(`http://localhost:3000/api/v1/auth/profile-url/${uid}`, data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization' : `Bearer ${token}`
            }
        }).then(res => {
            localStorage.setItem('url', res.data[0].url);
            res.data.url = url  
            
            this.setState({users: res.data})
        })  
        .catch(err => console.log(err))

       
    }

    componentDidUpdate(){
        const token = localStorage.token
        const author_id = localStorage.authorId
        

        const payload = {
            url: localStorage.url
        }
        axios.put(`http://localhost:3000/api/v1/articles/url/${author_id}`,  payload, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => window.location.reload())  
        .catch(err => console.log(err))
       
       
    }

    

    render() {
        
        return (
            <div>
                <EditProfle EditProfile={this.EditProfile} EditUrl={this.EditUrl} EditSocial={this.EditSocial} /> 
            </div>
        )
    }
}
