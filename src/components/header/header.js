import React from 'react';
import './header.scss';
import Wrapper from '../wrapper/wrapper';


const Header = () => {

    return <header className="page-header">
        <Wrapper>
        <nav className="page-header-menu">
            <a href='#' className="page-header-logo">SpaceNEWS</a>
            <ul className="page-header-menu-list">
                <li className="page-header-menu-item">
                    <a href='#banner-id'>next launch</a>
                </li>
                <li className="page-header-menu-item">
                    <a href='#articles-id'>what's up in space?</a>
                </li>
                <li className="page-header-menu-item">
                    <a href='#gallery-id'>gallery</a>
                </li>
                {/* <li className="page-header-menu-item">
                    <a href='#'>contact us</a>
                </li> */}
            </ul>
        </nav>
        </Wrapper>
    </header>
    
}

export default Header;