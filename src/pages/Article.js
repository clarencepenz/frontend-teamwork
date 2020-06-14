import React, { Component } from 'react'
import axios from 'axios'
import SingleFeed from '../components/feeds/article/SingleFeed'
import '../components/feeds/article/Feed.css'



class Article extends Component {

    state ={
        feed: []
    }

    componentDidMount(){
        const pid =  this.props.match.params.id
        const token = localStorage.token

     axios.get(`https://cipher-blog.herokuapp.com/api/v1/articles/${pid}`, { 
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
        })
     .then(res => this.setState({feed: res.data}))
      
    }

    handleClick = (pid) => {
        const token = localStorage.token
        axios.delete(`https://cipher-blog.herokuapp.com/api/v1/articles/${pid}`, { 
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => this.state.feed.filter(feed => feed.pid !== pid))
        this.props.history.push('/Blog')
    }

    handleEdit = (pid) =>{
        const token = localStorage.token
        axios.get( `https://cipher-blog.herokuapp.com/api/v1/articles/${pid}` , { 
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => console.log(pid))
    }

       
    render() {
        const article = this.state.feed.map(feed => <SingleFeed key={feed.id} feed={feed} handleClick={this.handleClick}  handleEdit={this.handleEdit}/>)
        return (
            <div className='Feed-Single'>
                {article}
            </div>
        )
    }
}


export default Article;