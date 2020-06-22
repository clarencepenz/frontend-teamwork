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
       
        axios.get(`https://cipher-blog.herokuapp.com/api/v1/articles/${post_id}/comments`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.setState({comment: res.data}))
        this.UpdateAvatar()

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
        axios.post(`https://cipher-blog.herokuapp.com/api/v1/articles/${post_id}/comments`, data, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => {
            window.location.reload()
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
        axios.delete(`https://cipher-blog.herokuapp.com/api/v1/articles/${post_id}/comments/${cid}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => this.state.comment.filter(comment => comment.cid !== cid))
        window.location.reload()
        this.props.history.push(`/article/${post_id}/comment`)
    }

    UpdateAvatar = () => {
        const token = localStorage.token
        const post_id = this.props.match.params.id
        const author_id = localStorage.authorId
        

        const payload = {
            avatar: localStorage.url
        }
        axios.put(`https://cipher-blog.herokuapp.com/api/v1/articles/${post_id}/comments/${author_id}`,  payload, {
            headers: {
                'content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
  
            }
        })
        .then(res => res)  
        .catch(err => console.log(err))
       
       
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