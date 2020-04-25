import React, { Component } from 'react'
import axios from 'axios'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './Profile.css'
import logo from './logo.svg'
import Spinner from '../utils/Spinner';


class EditProfle extends Component {
    state = {
        name: '',
        about: '',
        url: null,
        img: '',
        github: '...',
        facebook: '...',
        twitter: '...',
        loading: true

    }

    componentDidMount(){
        const uid = localStorage.userId
        const token = localStorage.token
        axios.get(`http://localhost:3000/api/v1/auth/profile/${uid}`, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            this.setState({
                name: res.data[0].username,
                about: res.data[0].about,
                url: res.data[0].url,
                github: res.data[0].github,
                twitter: res.data[0].twitter,
                facebook: res.data[0].facebook,
                loading: false

            })
        })
    }
    

    onSubmit=(e)=>{
        const {name, about} = this.state
        e.preventDefault()
        this.props.EditProfile(this.state.name, this.state.about)
        this.setState({name, about})
    }

    
    onSub=(e)=>{
        const {twitter, github, facebook} = this.state
        e.preventDefault()
        this.props.EditSocial(this.state.twitter, this.state.github, this.state.facebook)
        this.setState({twitter, github, facebook})
    }


    onSubmitUrl=(e)=>{
        const { url} = this.state
        e.preventDefault()
        this.props.EditUrl( this.state.url)
        this.setState({ url})
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
    handleFile=(e)=> {
        let file = e.target.files[0]
        const img = URL.createObjectURL(e.target.files[0])
        this.setState({url: file, img})
    }


    render() {
        const {url, img, facebook, twitter, github, loading} = this.state
        if (loading ) return <Spinner/>;
        return (
            <div className='Profile'> 
                <div className="Profile-img-Edit">
                <img src={url  ? img  || url  : logo } className="Profile-logo" alt="logo" />
                </div>
                <div className='Profile-info-Edit'>
                    <form onSubmit={this.onSubmitUrl} style={{marginBottom: '10px'}}>
                        <input              
                        type="file"
                        name="file"
                        className='Select-File'
                        onChange={this.handleFile}
                        />
                        <button 
                        className='Save-File'
                        type='submit'
                        value="submit"
                        >save</button>
                    </form>

                     <form onSubmit={this.onSubmit} style={{marginBottom: '20px'}}>
                        <input
                        type="text"
                        name="name"
                        placeholder=""
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                        <br/>
                        <textarea
                        type="text"
                        name="about"
                        placeholder=""
                        value={this.state.about}
                        onChange={this.onChange}
                        />
                        <button 
                        className='Save-Info'
                        type='submit'
                        value="submit"
                        >Update</button>
                    </form>
                    <form onSubmit={this.onSub} style={{marginBottom: '10px'}}>
                        <label><SocialMediaIconsReact icon="github"  roundness={50}  size={30} iconSize={1} url={github}/></label>
                        {' '} 
                        <input
                        type="text"
                        name="github"
                        placeholder="github"
                        value={this.state.github}
                        onChange={this.onChange}
                        />
                        <br/>
                        <label><SocialMediaIconsReact icon="twitter" roundness={50}  size={30} iconSize={1} url={twitter}/></label>
                        {' '}
                        <input
                        type="text"
                        name="twitter"
                        placeholder="twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        />
                         <br/>
                        <label><SocialMediaIconsReact icon="facebook" roundness={50}  size={30} iconSize={1} url={facebook}/></label>
                        {' '}
                        <input
                        type="text"
                        name="facebook"
                        placeholder="facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        />
                        <button 
                        style={{flex: '1'}}
                        type='submit'
                        value="submit"
                        >Update</button>
                    </form>
                </div>
               
            </div>
        )
    }
}


export default EditProfle;