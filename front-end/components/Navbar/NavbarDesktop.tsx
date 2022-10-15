import { FC } from 'react';

import NextLink from 'next/link';
import Image from 'next/image';

import { Box, Button, Link, Typography } from '@mui/material';

import styles from './Navbar.module.css';

export const NavbarDesktop: FC = () => {
  
    return (

        <nav className={ styles['navbar-desktop'] }>

          <Box sx={{ flex: 1 }}>
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
          </Box>

          <Box className={ styles['links-navbar'] }>

            <NextLink href='/services' passHref>
              <Link variant='h5' color='info.dark' style={{ textDecoration: 'none' }} className={ styles['link-navbar'] }>Servicios</Link>
            </NextLink>

            <NextLink href='/projects' passHref>
              <Link variant='h5' color='info.dark' style={{ textDecoration: 'none' }} className={ styles['link-navbar'] }>Proyectos</Link>
            </NextLink>

            <NextLink href='/aboutUs' passHref>
              <Link variant='h5' color='info.dark' style={{ textDecoration: 'none' }} className={ styles['link-navbar'] }>Nosotros</Link>
            </NextLink>

            <NextLink href='/contact' passHref>
              <Link underline='none'>
                <Button variant="contained" color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                  <Typography variant="h5" color="info.main" textTransform='capitalize'>Contáctanos</Typography>
                </Button>              
              </Link>
            </NextLink>  

          </Box>

        </nav>
    )
}