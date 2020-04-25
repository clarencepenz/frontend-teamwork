import React, { Component } from 'react'
import axios from 'axios'
import CommentItem from './CommentItem'
import AddComment from './AddComment'



class Comment extends Component {
    state = {
        comment: []
    }

    componentDidMount(){
        const post_id = this.props.match.params.id
        const token = localStorage.token
       
        axios.get(`http://localhost:3000/api/v1/articles/${post_id}/comments`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.setState({comment: res.data}))

    }

    AddComment=(comment, post_id)=>{
        const author = localStorage.author
        const author_id = localStorage.userId
        const avatar = localStorage.url
        const data ={
            comment,
            post_id,
            author,
            author_id,
            avatar
        }
        const token = localStorage.token
        axios.post(`http://localhost:3000/api/v1/articles/${post_id}/comments`, data, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        window.location.reload()
        .then(res => {
            res.data.comment = comment
            res.data.avatar = avatar
            res.data.author = author
            res.data.comment = comment
            this.setState({comment: [...this.state.comment, res.data]})
        })
        .catch(res => console.log(res))
    }

    handleClick =(cid) =>{
        const post_id = this.props.match.params.id
        const token = localStorage.token
        axios.delete(`http://localhost:3000/api/v1/articles/${post_id}/comments/${cid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.state.comment.filter(comment => comment.cid !== cid))
        window.location.reload()
        this.props.history.push(`/article/${post_id}/comment`)
    }
   


    render() {
        const comment = this.state.comment.map((comment, index) => <CommentItem key={index} comment={comment} handleClick={this.handleClick}/>)
        return (
            <div className='Comment-Main'>
                {comment}
                <AddComment
                 AddComment={this.AddComment} 
                 pid={this.props.match.params.id} 
                 />
            </div>
        )
    }
}


export default Comment;