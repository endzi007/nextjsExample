import React from 'react'
import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import Image from "next/image";
export default function Header() {
    return (
        <nav className={`${headerStyles.nav} padding`}>
            <div className={headerStyles.logo}>
                <Image 
                    src="/photos/logo.png"
                    alt="Logo"
                    width="200px"
                    height="100px"
                    layout="intrinsic"
                />

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
