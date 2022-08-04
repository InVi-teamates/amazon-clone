import React from 'react'
import '../styles/navbar.css'

export default function NavBar() {
    return (
        <div className='nav-bar-container'>
        <ul className='nav-bar'>
            <li className='nav-bar-item' >
                <a href="/" style = {{display: 'flex'}}>
                    <div>
                        <i className='ti-menu' style = {{paddingRight: '6px'}}></i>
                    </div>
                    All
                </a>
            </li>
            <li className='nav-bar-item'>
                <a href="/">Today's Deals</a>
            </li>
            <li className='nav-bar-item'>
                <a href="/">Customer Service</a>
            </li>
            <li className='nav-bar-item'>
                <a href="/">Registry</a>
            </li>
            <li className='nav-bar-item'>
                <a href="/">Gift Cards</a>
            </li>
            <li className='nav-bar-item'>
                <a href="/">Sell</a>
            </li>
        </ul>
        </div>
    )
}
