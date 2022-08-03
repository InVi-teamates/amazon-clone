import './footer.css';
import React from 'react'
import AboutFooter from './AboutFooter/AboutFooter'
import LinkFooter from './LinkFooter'
import FooterPadItem from './FooterPadItem';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="btt-container">
                <a href="/" id='bt-link'>
                    Back to top
                </a>
            </div>
            <AboutFooter />
            <div className='about-footer-line'></div>
            <FooterPadItem />
            <LinkFooter />
        </div>
    )
}
