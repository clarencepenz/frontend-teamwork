import React, { Component } from 'react'
import Profile from '../profile/Profile'
import Sidebar from './Sidebar'
import './Utils.css'

class Aside extends Component {
    render() {
        return (
            <div className='Aside'>
                <Profile/>
                <Sidebar/>
            </div>
        )
    }
}

export default Aside