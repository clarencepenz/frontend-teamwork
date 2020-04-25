import React, { Component } from 'react'
import './Feed.css';

class AddFeed extends Component {
    state = {
        title: '',
        body: ''
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.AddFeed(this.state.title, this.state.body)
        this.setState({title: '', body: '' })
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
 
    render() {
        return (
            <div className='Feed-Form'>
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    name="title" 
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <br/>
                    <textarea
                    type="text"
                    name="body"
                    placeholder="What's on your mind?"
                    value={this.state.body}
                    onChange={this.onChange}
                    className='Form-Body'
                    />
                     <br/>
                    <button 
                    disabled={!this.state.title && !this.state.body }
                    className='Form-Button'
                    type='submit'
                    value="submit"
                    >Publish</button>
                </form>
            </div>
        )
    }
}


export default AddFeed;