import { FC } from 'react';

import NextLink from 'next/link';
import Image from 'next/image';

import { Button, Container, Link, Typography } from '@mui/material';

import styles from './Navbar.module.css';

export const NavbarDesktop: FC = () => {
  
    return (

        <nav className={ styles['navbar-desktop'] }>

          <Container sx={{ flex: 1 }}>
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

          <Container className={ styles['links-navbar'] }>

            <NextLink href='/services' passHref>
              <Link variant='h5' color='info.dark' className={ styles['link-navbar'] }>Servicios</Link>
            </NextLink>

            <NextLink href='/projects' passHref>
              <Link variant='h5' color='info.dark' className={ styles['link-navbar'] }>Proyectos</Link>
            </NextLink>

            <NextLink href='/aboutUs' passHref>
              <Link variant='h5' color='info.dark' className={ styles['link-navbar'] }>Nosotros</Link>
            </NextLink>

            <NextLink href='/contact' passHref>
              <Link underline='none'>
                <Button variant="contained" color='secondary' className={ styles['button-navbar'] }>
                  <Typography variant="h5" color="info.main" textTransform='capitalize'>Contáctanos</Typography>
                </Button>              
              </Link>
            </NextLink>  

          </Container>

        </nav>
    )
}