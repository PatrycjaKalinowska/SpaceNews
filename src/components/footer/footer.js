import React from 'react';
import Wrapper from '../wrapper/wrapper';
import './footer.scss';

const Footer = () => {

    return <footer className="page-footer">
        <Wrapper>
            <nav className="page-footer-nav">
                <a href='#' className="page-footer-logo">SpaceNEWS</a>
                <ul className="page-footer-nav-list">
                    <li className="page-footer-nav-item">
                        <a href='#'>© spacenews.org</a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    </footer>
}

export default Footer;