import React, { Component } from 'react'
import GifItem from './GifItem'

class GifComponent extends Component {
    render() {
        return (
            <div>
                <GifItem feed={this.props.feed} handleClick={this.props.handleClick}/>
            </div>
        )
    }
}

export default  GifComponent;