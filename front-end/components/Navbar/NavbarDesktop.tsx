import { FC, useState } from 'react';

import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Button, Link, Typography } from '@mui/material';

import { MenuServicesNavbarDesktop } from './MenuServicesNavbarDesktop';

import styles from './Navbar.module.css';

export const NavbarDesktop: FC = () => {

  const [ menuService, setMenuService ] = useState(false);

  const handleClick = ( event: any ) => {
    event.preventDefault();

    if ( menuService === false ) {
      setMenuService( true );
    } else {
      setMenuService( false );
    }
  }

  const { asPath } = useRouter();
  
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

          <NextLink href='/servicios' passHref>
            <Link variant='h5' color='info.dark' 
                  className={ styles['link-navbar'] } 
                  sx={ asPath.includes('/servicio') ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined } 
                  onClick={ handleClick }>
              Servicios
            </Link>
          </NextLink>

          <NextLink href='/proyectos' passHref>
            <Link variant='h5' color='info.dark' 
                  className={ styles['link-navbar'] } 
                  sx={ asPath === '/proyectos' ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined }>
              Proyectos
            </Link>
          </NextLink>

          <NextLink href='/sobreNosotros' passHref>
            <Link variant='h5' color='info.dark' 
                  className={ styles['link-navbar'] } 
                  sx={ asPath === '/sobreNosotros' ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined }>
              Nosotros
            </Link>
          </NextLink>

          <NextLink href='/contacto' passHref>
            <Link underline='none'>
              <Button variant="contained" color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                <Typography variant="h5" color="info.main" textTransform='capitalize'>Contáctanos</Typography>
              </Button>              
            </Link>
          </NextLink>  

        </Box>

        { menuService && (<MenuServicesNavbarDesktop />) }

      </nav>
  )
}