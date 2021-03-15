import React, { useEffect } from 'react'
import Link from 'next/link'

import { AppBar, Button, ButtonBase, Toolbar } from "@material-ui/core";
export default function Header() {

    return (
        <AppBar position="absolute" color="transparent">
            <Toolbar>
                <Link href="/" passHref>
                    <Button variant="text"> Home </Button>
                </Link>
                <Link href="/about" passHref>
                    <Button variant="text"> About </Button>
                </Link>
                <Link href="/contact" passHref>
                    <Button variant="text"> Contact </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}