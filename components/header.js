import React, { useEffect } from 'react'
import Link from 'next/link'
import { AppBar, Button, ButtonBase, Toolbar } from "@material-ui/core";
export default function Header() {

    return (
        <AppBar position="absolute" color="transparent">
            <Toolbar>
                <Link href="/" passHref>
                    <Button variant="text" color="inherit"> Home </Button>
                </Link>
                <Link href="/about" passHref>
                    <Button variant="text" color="inherit"> About </Button>
                </Link>
                <Link href="/contact" passHref>
                    <Button variant="text" color="inherit"> Contact </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}