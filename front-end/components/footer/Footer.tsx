import { FC } from 'react';

import NextLink from 'next/link';

import { Box, Grid, Link, Typography } from '@mui/material';

import styles from './Footer.module.css';
import { Email, LocationOn, PhoneInTalk } from '@mui/icons-material';

export const Footer: FC = () => {

    return (
        
        <Box className={ styles['footer'] }>

            <Grid container spacing={ 10 }>

                <Grid item sm={ 12 } md={ 6 } lg={ 3 }>
                  
                    <Typography variant='h4' color='info.main' className={ styles['footer-title'] }>Nuestros servicios</Typography>

                    <NextLink href='/' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-item'] }>Diagnóstico</Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-item'] }>Diseño</Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-item'] }>Ejecución</Link>
                    </NextLink>

                </Grid>

                <Grid item sm={ 12 } md={ 6 } lg={ 3 }>
                  
                    <Typography variant='h4' color='info.main' className={ styles['footer-title'] }>Empresa</Typography>

                    <NextLink href='/' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-item'] }>Proyectos</Link>
                    </NextLink>
                    <NextLink href='/' passHref>
                    <Link variant='body2' color='info.main' className={ styles['footer-item'] }>Sobre Nosotros</Link>
                    </NextLink>

                </Grid>

                <Grid item sm={ 12 } md={ 6 } lg={ 4 }>
                  
                    <Typography variant='h4' color='info.main' className={ styles['footer-title'] }>Contacto</Typography>

                    <Box className={ styles['footer-item'] } sx={{ display: 'flex' }}>
                        <PhoneInTalk color='info' sx={{ marginRight: '0.625rem'}} />
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                +584161234567
                            </Link>
                        </NextLink>
                    </Box>
                    <Box className={ styles['footer-item'] } sx={{ display: 'flex' }}>
                        <Email color='info' sx={{ marginRight: '0.625rem'}} />
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                cosapi@gmail.com
                            </Link>
                        </NextLink>
                    </Box>
                    <Box className={ styles['footer-item'] } sx={{ display: 'flex' }}>
                        <LocationOn color='info' sx={{ marginRight: '0.625rem'}} />
                        <NextLink href='/' passHref>
                            <Link variant='body2' color='info.main' sx={{ textDecoration: 'none' }}>
                                Centro Empresarial Tecno Acero de Venezuela, Maturin-Estado Monagas
                            </Link>
                        </NextLink>
                    </Box>

                </Grid>
              
            </Grid>

        </Box>

    )
}
