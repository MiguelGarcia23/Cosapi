import { FC } from 'react';

import NextLink from 'next/link';

import { Box, Grid, Link, Typography } from '@mui/material';
import { Email, LocationOn, PhoneInTalk } from '@mui/icons-material';

import { ItemFooter } from './ItemFooter';

import styles from './Footer.module.css';

export const Footer: FC = () => {

    return (
        
        <Box className={ styles['footer'] }>

            <Grid container spacing={ 10 }>

                <ItemFooter title='Nuestros servicios' large={ 3 }>

                    <>
                        <NextLink href='/servicios/diagnostico' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Diagnóstico</Link>
                        </NextLink>
                        <NextLink href='/servicios/disenio' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Diseño</Link>
                        </NextLink>
                        <NextLink href='/servicios/ejecucion' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Ejecución</Link>
                        </NextLink>
                    </>

                </ItemFooter>

                <ItemFooter title='Empresa' large={ 3 }>

                    <>
                        <NextLink href='/proyectos' passHref>
                            <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Proyectos</Link>
                        </NextLink>
                        <NextLink href='/sobreNosotros' passHref>
                        <Link variant='body2' color='info.main' className={ styles['footer-link'] }>Sobre Nosotros</Link>
                        </NextLink>
                    </>

                </ItemFooter>

                <ItemFooter title='Contacto' large={ 4 }>

                    <>
                        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
                            <PhoneInTalk color='info' sx={{ marginRight: '0.625rem'}} />
                            <Typography variant='body2' color='info.main'>
                                0414-7658324
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
                            <Email color='info' sx={{ marginRight: '0.625rem'}} />
                            <Typography variant='body2' color='info.main'>
                                hcardenas@cosapi.com.ve
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
                            <LocationOn color='info' sx={{ marginRight: '0.625rem'}} />
                            <Typography variant='body2' color='info.main'>
                                Centro Empresarial Tecno Acero de Venezuela, Maturin-Estado Monagas
                            </Typography>
                        </Box>
                    </>

                </ItemFooter>
              
            </Grid>

        </Box>

    )
}
