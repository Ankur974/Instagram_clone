import React from 'react'
import "./Homepage.css";
import Sidenav from './navigation/Sidenav'
import Timeline from './timelines/Timeline'

const Homepage = () => {
    return (
        <div className="homepage" >
            <div className="homepage__nav">
                <Sidenav/>
            </div>
            <div className="homepage_timeline">
                <Timeline/>
            </div>
        </div>
    )
}

export default Homepage
