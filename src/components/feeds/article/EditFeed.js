import React, { Component } from 'react'

class EditFeed extends Component {
    state = {
        title: this.props.feed.title,
        body: this.props.feed.body
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.handleEdit(this.state.title, this.state.body)
        this.setState({title: '', body: '' })
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
 
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder=""
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="body"
                    placeholder=""
                    value={this.state.body}
                    onChange={this.onChange}
                    />
                    <button 
                    style={{flex: '1'}}
                    type='submit'
                    value="submit"
                    >Update</button>
                </form>
            </div>
        )
    }
}

export default EditFeed;