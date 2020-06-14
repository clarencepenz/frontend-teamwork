import React, { Component } from 'react'
import axios from 'axios'
import SingleGif from '../components/feeds/gif/SingleGif'


class Gifs extends Component {
    state = { 
        feed: []
    }

    componentDidMount(){
        const gid = this.props.match.params.id
        const token = localStorage.token
        axios.get(`https://cipher-blog.herokuapp.com/api/v1/gifs/${gid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.setState({feed: res.data}))
    }

    handleClick =(gid) =>{
        const token = localStorage.token
        axios.delete(`https://cipher-blog.herokuapp.com/api/v1/gifs/${gid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.state.feed.filter(feed => feed.gid !== gid))
        this.props.history.push('/Gifs')
    }

    render() {
        const gifs = this.state.feed.map(feed => <SingleGif key={feed.gid} feed={feed} handleClick={this.handleClick}/>)
        return (
            <div>
                {gifs}
            </div>
        )
    }
}


export default  Gifs;