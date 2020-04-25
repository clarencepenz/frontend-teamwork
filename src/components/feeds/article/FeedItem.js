import React, { Component } from 'react'
import {Link,  BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg'
import './Feed.css';
import LastSeen from '../../utils/LastSeen';
import CheckAuth from '../../CheckAuth'
import Comment from '../comment/Comment'



class FeedItem extends Component {
    render() {
         const clock = this.props.feed.date
         const date = Date.parse(clock)
         const time = <LastSeen date={date}/>
      
        return (
          <div>
              <div className="Feed">
                  <div className='Feed-Image'>
                    <img src={this.props.feed.url ? this.props.feed.url : logo} className="App-logo" alt="logo" /> 
                  </div>
                  <div className='Feed-items'  onClick={() => this.props.handleClick(this.props.feed.pid)}>
                    <Link style={linkStyle} to ={"/article/" + this.props.feed.pid + "/comment"}  >
                      <h2>{this.props.feed.title}</h2>
                      <>{ clock ? time : '10mins'}</> 
                      <h5>{this.props.feed.body}</h5>
                    </Link>
                    <div className='Feed-Links'>
                        <h4 className='Feed-Name'>{this.props.feed.author ? this.props.feed.author : 'User'} </h4>
                        <p><Link className='Feed-Like' style={linkStyle} to ={"article/" + this.props.feed.pid + "/comment"}>like</Link></p>
                        <p style={{width: '10px'}}><Link className='Feed-Comment-Main' style={linkStyle} to ={"article/" + this.props.feed.pid + "/comment"}>comment</Link></p>
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

export default FeedItem;