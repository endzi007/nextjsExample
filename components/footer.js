import React from 'react'
import footerStyles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={`${footerStyles.footer} fullWidthSection padding`}>
            <div className={footerStyles.footerTop}>
                top div
            </div>
            <footer className={`${footerStyles.footerBottom} fullWidthSection padding`}>
                <div>Enis</div>
                <div>Enis</div>
                <div>Enis</div>
                <div>Enis</div>
            </footer>
        </div>
    )
}
