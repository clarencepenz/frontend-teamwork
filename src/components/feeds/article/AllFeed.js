import React, { Component } from 'react'
import axios from 'axios'
import AddFeed from './AddFeed'
import FeedItem from './FeedItem'
import './Feed.css';
import Spinner from '../../utils/Spinner';


class AllFeed extends Component {
    state = {
        feed: [],
        loading: true
        
    }

    componentDidMount(){
    
        const token = localStorage.token

     axios.get('http://localhost:3000/api/v1/articles', { 
        //  params: { 
        //      'token': localStorage.getItem('token')},
             headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
            })
     .then(res => {this.setState({loading: false, feed: res.data})})
        

    }
    
 AddFeed = (title, body) => {
     const author = localStorage.author
     const author_id = localStorage.userId
     const url = localStorage.url
  

     
     
     
     const data = { 
         title,
         body,
         author,
         author_id,
         url
     }
     const token = localStorage.token
      axios.post('http://localhost:3000/api/v1/articles',  data, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`

        }
    })
      .then(res =>  {
          window.location.reload()
          res.data.title = title
          res.data.body = body

          this.setState({feed: [ res.data.data, ...this.state.feed]})
      })   
      .catch(err => console.log(err))

   }

   handleClick = (pid) =>{
    const token = localStorage.token
     axios.get( `http://localhost:3000/api/v1/articles/${pid}`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`

        }
    })
    
    
    .then(res => console.log(pid))

   }
 


    render() {
        const { loading } = this.state;
        if (loading ) return <Spinner/>;
        const Feeds =   this.state.feed.map((feed, index) => <FeedItem key={index} feed={feed} handleClick={this.handleClick}  /> )
        return (
            <div className='AllFeed'>
              
                <div>
                <AddFeed AddFeed={this.AddFeed}/> 
                {Feeds}
               
                </div>
            </div>
            
        )
    }
}

export default AllFeed;