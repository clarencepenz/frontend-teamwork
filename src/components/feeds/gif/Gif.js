import React, { Component } from 'react'
import axios from 'axios'
//import GifComponent from './GifComponent'
import GifItem from './GifItem'
import AddGif from './AddGif'
import './Gif.css'
import Spinner from '../../utils/Spinner'

class Gif extends Component {
    state ={
        feed: [],
        loading: true
    }

    componentDidMount(){
        const token = localStorage.token
        axios.get('http://localhost:3000/api/v1/gifs', {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.setState({loading: false, feed: res.data}))
    }

    handleClick = (gid) =>{
        const token = localStorage.token
        axios.get(`http://localhost:3000/api/v1/gifs/${gid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => console.log(gid))
    }

    AddGifs = (title, url) => {
        const author = localStorage.author
        const author_id = localStorage.userId
        const avatar = localStorage.url


        const data = new FormData()
        data.append('title', title)
        data.append('url',  url)
        data.append('author',  author)
        data.append('author_id',  author_id)
        data.append('avatar',  avatar)

        const token = localStorage.token
        axios.post('http://localhost:3000/api/v1/gifs', data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            res.data.title = title
            res.data.url = url
            this.setState({feed: [ res.data, ...this.state.feed]})
        })  
        .catch(err => console.log(err))

    }

    render() {
        const { loading } = this.state
        if (loading ) return <Spinner/>;
        const gif = this.state.feed.map((feed, index) => <GifItem key={index} feed={feed} handleClick={this.handleClick}/>)
        return (
            <div className='Gif'>
                <AddGif AddGifs={this.AddGifs} />
                {gif}
            </div>
        )
    }
}


export default Gif;