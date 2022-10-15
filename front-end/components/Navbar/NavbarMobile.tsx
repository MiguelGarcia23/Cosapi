import { FC } from 'react';

import NextLink from 'next/link';
import Image from 'next/image';

import { Button, Container, Link, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Navbar.module.css';

export const NavbarMobile: FC = () => {
  
    return (

        <nav className={ styles['navbar-mobile'] }>

            <Button variant='text' color='info'>
                <MenuIcon sx={{ fontSize: 40 }} color='primary' />
            </Button>

            <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <NextLink href='/' passHref>
                <Link>
                    <Image 
                    src= '/logo.svg'
                    alt= 'Logo Cosapi'
                    width= { 190 }
                    height= { 100 }
                    />
                </Link>
                </NextLink>
            </Container>

        </nav>
    )
}