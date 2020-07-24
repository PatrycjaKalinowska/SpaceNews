import React from 'react';
import './header.scss';
import Wrapper from '../wrapper/wrapper';


const Header = () => {

    return <header className="page-header">
        <Wrapper>
        <nav className="page-header-menu">
            <span className="page-header-logo">SpaceNEWS</span>
            <ul className="page-header-menu-list">
                <li className="page-header-menu-item">menu1</li>
                <li className="page-header-menu-item"> menu2</li>
                <li className="page-header-menu-item" >menu3</li>
                <li className="page-header-menu-item" >menu4</li>
            </ul>
        </nav>
        </Wrapper>
    </header>
    
}

export default Header;