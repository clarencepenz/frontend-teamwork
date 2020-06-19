import React, { Component } from 'react'
import axios from 'axios'
import CommentItem from './CommentItem'
import AddComment from './AddComment'
import './Comment.css'


class CommentGif extends Component {
    state = {
        comment: []
    }

    componentDidMount(){
        
        const gif_id = this.props.match.params.id
        const token = localStorage.token

         axios.get(`https://cipher-blog.herokuapp.com/api/v1/gifs/${gif_id}/comments`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
       
         .then(res => {
            this.setState({comment: res.data})
         })
    }

    AddGifComment=(comment, gif_id)=>{
        const author = localStorage.author
        const author_id = localStorage.userId
        const avatar = localStorage.url
        const data ={
            comment,
            gif_id,
            author,
            author_id,
            avatar
        }
        const token = localStorage.token
        axios.post(`https://cipher-blog.herokuapp.com/api/v1/gifs/${gif_id}/comments`, data, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        window.location.reload()
        .then(res => {
                console.log(res.data.date)
          res.data.comment = comment
          res.data.avatar = avatar
          res.data.author = author
            
            this.setState({comment: [...this.state.comment, res.data]})
        })
        .catch(res => console.log(res))
    }

    handleClick =(cid) =>{
        const gif_id = this.props.match.params.id
        const token = localStorage.token 
        axios.delete(`https://cipher-blog.herokuapp.com/api/v1/articles/${gif_id}/comments/${cid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.state.comment.filter(comment => comment.cid !== cid))
        window.location.reload()
        this.props.history.push(`/gif/${gif_id}/comment`)
    }

    render() {
        const comment = this.state.comment.map((comment, index) => <CommentItem key={index} comment={comment} handleClick={this.handleClick}/>)
        return (
            <div className='Comment-Main'>
                {comment}
                <AddComment
                 AddGifComment={this.AddGifComment}
                 gid={this.props.match.params.id}
                 />
            </div>
        )
    }
}


export default CommentGif;