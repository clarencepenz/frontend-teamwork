import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Utils.css'

class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <ul style={list}>
                    <li><Link style={linkStyle} to ="/About">About</Link></li>
                    <li><Link style={linkStyle} to ="/Blog">Blog</Link></li>
                    <li><Link style={linkStyle} to ="/Gifs">Gifs</Link></li>
                    <li><Link style={linkStyle} to ="/Articles">Articles</Link></li>
                </ul>
            </div>
            
        )
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}


const list ={
    listStyle: 'none',
    marginTop: '20px',
    MarginRight: '60px!important'
}
export default Sidebar;