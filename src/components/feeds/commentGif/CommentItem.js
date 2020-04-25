import React, { Component } from 'react'
import LastSeen from '../../utils/LastSeen'
import './Comment.css'

class CommentItem extends Component {
    render() {
        const authorId = this.props.comment.author_id
        const userId = localStorage.userId
        const clock = this.props.comment.date
        const date = Date.parse(clock)
        const time = <LastSeen date={date}/>
        return (
            <div className='Comment'>
                <div className='Comment-Image'>
                    <img src={this.props.comment.avatar ? this.props.comment.avatar : ''} className="App-logo" alt="logo" /> 
                </div>
                <div>
                    <p>{this.props.comment.author}</p>
                    <>{ clock ? time : '10mins'}</> 
                    <p>{this.props.comment.comment}</p>
                
                <p onClick={() => this.props.handleClick(this.props.comment.cid) }>{ userId === JSON.stringify(authorId) ? 'x' : ''}</p>
                </div>
                <div>
                    <p>
                        {}
                    </p>
                </div>
            </div>
        )
    }
}



export default CommentItem;