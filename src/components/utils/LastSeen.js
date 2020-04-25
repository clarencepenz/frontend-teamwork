import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastSeen({date}) {
    return (
        <div style={{fontSize: '10px'}}>
           <ReactTimeAgo date={date}/>
        </div>
    )
}
