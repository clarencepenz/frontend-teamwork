import React, { Component } from 'react'
import axios from 'axios'
import EditFeed from '../components/feeds/article/EditFeed'

class Edit extends Component {
    state = {
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

    handleEdit = (title, body) =>{
        const data = {
            title,
            body
        }
        const pid =  this.props.match.params.id
        const token = localStorage.token
         axios.put(`https://cipher-blog.herokuapp.com/api/v1/articles/${pid}`,  data, {
             headers: {
                 'Content-Type' : 'application/json',
                 'Authorization' : `Bearer ${token}`
   
             }
         })
         .then(res =>  {
               
            //  this.setState({feed: res.data})
             this.props.history.push('/article/' + this.props.match.params.id)
         })   
         .catch(err => console.log(err))
    }


    render() {
        const edit = this.state.feed.map((feed, index) => <EditFeed key={index} feed={feed} handleEdit={this.handleEdit} />)
        return (
            <div>
                {edit}
            </div>
        )
    }
}

export default Edit;