import { FC, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { Email, LocationOn, PhoneInTalk } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';


export const InfoContact: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box className={ styles['contact-info'] }>

            <Box data-aos='fade-up' sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                <Box className={ styles['contact-info-items'] }>

                    <Box className={ styles['contact-info-item'] }>

                        <LocationOn fontSize='large' sx={{ display: 'block', margin: '0 auto', marginBottom: '1.25rem' }} />
                        <Typography variant='h3' color='info.dark' sx={{ marginBottom: '0.75rem', textAlign: 'center' }}>Ubicación</Typography>
                        <Typography variant='body2' color='info.dark' sx={{ textAlign: 'center' }}>
                            Centro Empresarial Tecno Acero de Venezuela, Maturin-Estado Monagas
                        </Typography>
                        
                    </Box>

                    <Box className={ styles['contact-info-item'] }>

                        <PhoneInTalk fontSize='large' sx={{ display: 'block', margin: '0 auto', marginBottom: '1.25rem' }} />
                        <Typography variant='h3' color='info.dark' sx={{ marginBottom: '0.75rem', textAlign: 'center' }}>Teléfono</Typography>
                        <Typography variant='body2' color='info.dark' sx={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                            +584161234567
                        </Typography>
                        <Typography variant='body2' color='info.dark' sx={{ marginBottom: '0.5rem', textAlign: 'center' }}>
                            +584161234567
                        </Typography>
                        <Typography variant='body2' color='info.dark' sx={{ textAlign: 'center' }}>
                            +584161234567
                        </Typography>

                    </Box>

                    <Box className={ styles['contact-info-item'] }>

                        <Email fontSize='large' sx={{ display: 'block', margin: '0 auto', marginBottom: '1.25rem' }} />
                        <Typography variant='h3' color='info.dark' sx={{ marginBottom: '0.75rem', textAlign: 'center' }}>Email</Typography>
                        <Typography variant='body2' color='info.dark' sx={{ textAlign: 'center' }}>
                            cosapi@gmail.com
                        </Typography>

                    </Box>
                    
                </Box>

                <Box className={ styles['contact-info-map'] }>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.026515189376!2d-63.190594161855905!3d9.761575734033572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3340bd21f1fb49%3A0x3c4f4bd7376356b5!2sCosapi%20Servicios%20C.A.!5e0!3m2!1ses!2sve!4v1666987294573!5m2!1ses!2sve"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </Box>

            </Box>

        </Box>

    )
}
