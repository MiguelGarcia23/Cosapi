import { FC } from 'react';

import NextLink from 'next/link';

import { Box, Grid, Link } from '@mui/material';
import { Email, LocationOn, PhoneInTalk } from '@mui/icons-material';

import { ItemFooter } from './ItemFooter';

import styles from './Footer.module.css';

export const Footer: FC = () => {

    return (
        
        <Box className={ styles['footer'] }>

            <Grid container spacing={ 10 }>

                <ItemFooter title='Nuestros servicios' large={ 3 }>

                    <>
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Diagnóstico</Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Diseño</Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Ejecución</Link>
                        </NextLink>
                    </>

                </ItemFooter>

                <ItemFooter title='Empresa' large={ 3 }>

                    <>
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Proyectos</Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Sobre Nosotros</Link>
                        </NextLink>
                    </>

                </ItemFooter>

                <ItemFooter title='Contacto' large={ 4 }>

                    <>
                        <Box className={ styles['footer-link'] } sx={{ display: 'flex' }}>
                            <PhoneInTalk color='info' sx={{ marginRight: '0.625rem'}} />
                            <NextLink href='/' passHref>
                                <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                    +584161234567
                                </Link>
                            </NextLink>
                        </Box>
                        <Box className={ styles['footer-link'] } sx={{ display: 'flex' }}>
                            <Email color='info' sx={{ marginRight: '0.625rem'}} />
                            <NextLink href='/' passHref>
                                <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                    cosapi@gmail.com
                                </Link>
                            </NextLink>
                        </Box>
                        <Box className={ styles['footer-link'] } sx={{ display: 'flex' }}>
                            <LocationOn color='info' sx={{ marginRight: '0.625rem'}} />
                            <NextLink href='/' passHref>
                                <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                    Centro Empresarial Tecno Acero de Venezuela, Maturin-Estado Monagas
                                </Link>
                            </NextLink>
                        </Box>
                    </>

                </ItemFooter>
              
            </Grid>

        </Box>

    )
}
