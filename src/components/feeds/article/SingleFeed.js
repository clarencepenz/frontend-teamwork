import React, { Component } from 'react'
import {Link,  BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg'
import './Feed.css'
import LastSeen from '../../utils/LastSeen'
import CheckAuth from '../../CheckAuth'
import Comment from '../comment/Comment'






class SingleFeed extends Component {
    render() {
        const authorId = this.props.feed.author_id
        const userId = localStorage.userId
        const clock = this.props.feed.date
        const date = Date.parse(clock)
        const time = <LastSeen date={date}/>
        
        return (
            <div>
            <div className="Feed">
            <div className='Feed-Image'>
                <img src={this.props.feed.url ? this.props.feed.url : logo} className="App-logo" alt="logo" /> 
            </div>
            <div className='Feed-items'>
                <h2>{this.props.feed.title}</h2>
                <>{ clock ? time : '10mins'}</> 
                <h5>{this.props.feed.body}</h5>
                
                
                <div className='Feed-Links'>
                    <h4 className='Feed-Name'>{this.props.feed.author ? this.props.feed.author : 'User'} </h4>
                    <p className='Feed-Comment' style={delStyle} onClick={() => this.props.handleClick(this.props.feed.pid)}>{ userId === JSON.stringify(authorId) ? 'x' : ''}</p>
                    <p className='Feed-Comment' style={delStyle} onClick={() => this.props.handleEdit(this.props.feed.pid)}><Link style={linkStyle} to ={"/edit/" + this.props.feed.pid}>{userId === JSON.stringify(authorId) ? 'edit' : ''}</Link></p>
                </div>
                
            </div>
        </div>
                <Router>
                      <Route path="/article/:id/comment" component={CheckAuth(Comment)}/>
                </Router>
        </div>
        )
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: '#000',
}

const delStyle = {
    cursor: 'pointer'
}

export default SingleFeed;