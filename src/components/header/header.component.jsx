import React from 'react';

import './header.component.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to='/' className='logo'>Score It!</Link>
    )
}

export default Header;