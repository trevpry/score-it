import React from 'react';

import './header.component.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo'>Score It!</Link>
        </div>
    )
}

export default Header;