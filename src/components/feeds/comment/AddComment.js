import React, { Component } from 'react'

class AddComment extends Component {
    state = {
        comment: '',
        post_id: this.props.pid,
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.AddComment(this.state.comment, this.state.post_id)
        this.setState({comment: ''})
    }
    onChange =(e) =>this.setState({[e.target.name]: e.target.value})
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                     type="text"
                     name="comment"
                     placeholder="reply"
                     value={this.state.comment}
                     onChange={this.onChange}
                    />
                    <button 
                    style={{flex: '1'}}
                    type='submit'
                    value="submit"
                    >comment</button>
                </form>
            </div>
        )
    }
}


export default  AddComment;