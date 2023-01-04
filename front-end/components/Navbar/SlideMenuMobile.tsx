import { FC, useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Box, Button, Link, Typography } from '@mui/material';

import { MenuServicesNavbarMobile } from './MenuServicesNavbarMobile';

import styles from './Navbar.module.css';

interface Props {
    menuServicesState: boolean;
    handleClickServices: ( event: any ) => void;
}


export const SlideMenuMobile: FC<Props> = ({ menuServicesState, handleClickServices }) => {

    const { asPath } = useRouter();

    return (

        <Box className={ styles['slide-menu-mobile'] } >

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <NextLink href='/servicios' passHref>
                    <Link variant='h5' color='info.main' fontWeight={ 700 }
                            className={ styles['link-navbar-mobile'] } 
                            sx={ asPath.includes('/servicio') ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined } 
                            onClick={ handleClickServices }>
                        Servicios
                    </Link>
                </NextLink>

                <NextLink href='/proyectos' passHref>
                    <Link variant='h5' color='info.main' fontWeight={ 700 }
                            className={ styles['link-navbar-mobile'] } 
                            sx={ asPath === '/proyectos' ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined }>
                        Proyectos
                    </Link>
                </NextLink>

                <NextLink href='/sobreNosotros' passHref>
                    <Link variant='h5' color='info.main' fontWeight={ 700 }
                            className={ styles['link-navbar-mobile'] } 
                            sx={ asPath === '/sobreNosotros' ? { padding: '0.5rem 0', borderBottom: '4px solid #0184EF' } : undefined }>
                        Nosotros
                    </Link>
                </NextLink>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NextLink href='/contacto' passHref>
                    <Link underline='none'>
                        <Button variant="contained" color='secondary' style={{ padding: '0.625rem 1.25rem', borderRadius: '8px' }}>
                            <Typography variant="h5" color="info.main" textTransform='capitalize'>Contáctanos</Typography>
                        </Button>              
                    </Link>
                </NextLink>
            </Box>

            { menuServicesState && (<MenuServicesNavbarMobile />) }

        </Box>

    )
}