import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg'
import LastSeen from '../../utils/LastSeen'
import CheckAuth from '../../CheckAuth'
import CommentGif from '../commentGif/CommentGif'

class SingleGif extends Component {
    render() {
        const authorId = this.props.feed.author_id
        const userId = localStorage.userId
        const clock = this.props.feed.date
        const date = Date.parse(clock)
        const time = <LastSeen date={date}/>
        return (
            <div className='Gif-Item-single'> 
                <div className='Gif-Item'>
                <div className='Gif-Container'>
                <div style={{width: "50px", height: "50px", borderRadius: "50%", marginRight: '10px'}}>
                <img src={this.props.feed.avatar ? this.props.feed.avatar : logo} style={{width: "50px", height: "50px", borderRadius: "50%"}} alt="logo" />
                </div>
                <div>
                    <h2 className='Gif-Title'>{this.props.feed.title}</h2> 
                    <>{ clock ? time : '10mins'}</> 
                    <img className='Gif-Image' src={this.props.feed.url}  alt="logo"/>
                    <h4 className='Gif-Name'>{this.props.feed.author ? this.props.feed.author : 'User'} </h4>
                    <p onClick={() => this.props.handleClick(this.props.feed.gid)}>{ userId === JSON.stringify(authorId) ? 'x' : ''}</p>
                </div>
                </div>
                </div>
                <Router>
                    <Route path="/gif/:id/comment" component={CheckAuth(CommentGif)}/>
                </Router>
            </div>
            
        )
    }
}


export default  SingleGif;