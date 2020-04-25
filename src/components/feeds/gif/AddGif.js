import React, { Component } from 'react'
import logo from './logo.svg'
import './Gif.css'


class AddGif extends Component {
    state = {
        title: '',      
        url: null,
        img: ''
    }

   onSubmit= (e) =>{
        e.preventDefault()
        this.props.AddGifs(this.state.title, this.state.url)
        this.setState({title: '', url: null })
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
    handleFile=(e)=> {
        let file = e.target.files[0]
        const img = URL.createObjectURL(e.target.files[0])
        this.setState({url: file, img})
    }

    render() {
        const {url, img} = this.state
        return (
            <div className='Gif-Form'>
                 <form onSubmit={this.onSubmit}  >
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                     <div className="Gif-Image-Container">
                        <img src={url  ? img  || url  : logo } className="Gif-Image-Content" alt="logo" />
                    </div>
                    <input              
                    type="file"
                    name="file"
                    className='Gif-Image-Select'
                    onChange={this.handleFile}
                    />
                    <button 
                    style={{flex: '1'}}
                    className='Gif-Button'
                    type='submit'
                    value='submit'
                    >Publish</button>
                </form>
            </div>
        )
    }
}


export default  AddGif;