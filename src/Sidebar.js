import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return(
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img className='sidebar_img' src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg"/>
            <Avatar/>
            <h2>Abhishek Agarwal</h2>
            <h4>agrawal.abhishek120201@gmail.com</h4>    
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2312</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on your post</p>
                <p className='sidebar_statNumber'>2367</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
    )
}

export default Sidebar;