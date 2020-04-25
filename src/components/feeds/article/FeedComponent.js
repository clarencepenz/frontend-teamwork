import React, { Component } from 'react';
import FeedItem from './FeedItem'





class FeedComponent extends Component {
    render() {
        return (
            <div>
                <FeedItem feed={this.props.feed}  handleClick={this.props.handleClick}/>
            </div>
        )
    }
}

export default FeedComponent;