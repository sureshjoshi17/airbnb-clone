import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { ExpandMore, Language } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img 
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="app logo" className="header__icon" 
                />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a Host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>

    )
}

export default header
