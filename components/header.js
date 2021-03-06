import React from 'react'
import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
export default function Header() {
    return (
        <nav className={`${headerStyles.nav} padding`}>
            <div>
                Logo
            </div>
            <ul className={headerStyles.ul}>
                <li>
                    <Link href="/" >
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
