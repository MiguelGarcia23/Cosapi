import { FC, useEffect } from 'react';

import { Box, Grid, Typography, TextField, styled, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './FormContact.module.css';

const CssTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        backgroundColor: '#FFFFFF',
        borderRadius: '8px'
    },
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiFilledInput-root': {
        backgroundColor: 'white',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'white'
        },
        '&.Mui-focused': {
            backgroundColor: 'white'
        },
    }
});

export const FormContact: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        
        <Box className={ styles['form-contact-home'] }>

            <Box data-aos='fade-up'>

                <Typography variant='h2' color='info.main' sx={{ marginBottom: '2.5rem' }}>
                    ¿Te gustaría contactarnos?
                </Typography>

                <Box
                    component='form'
                    sx={{
                        '& .MuiTextField-root': { m: '1 auto', width: '100%' },
                    }}
                    noValidate
                    autoComplete='off'
                >
                    <Grid container spacing={ 2 } sx={{ marginBottom: '1.5rem' }}>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' label='Nombre' variant='filled' />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' label='Apellido' variant='filled' />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' label='Email' variant='filled' />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' label='Teléfono' variant='filled' />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 }>
                            <CssTextField multiline id='filled-textarea' label='Mensaje' placeholder='Mensaje' variant='filled'/>
                        </Grid>
                    
                    </Grid>

                    <Box className={ styles['form-contact-home-button-box'] }>
                        <Button variant='contained' color='secondary' className={ styles['form-contact-home-button'] }>
                            Enviar
                        </Button>
                    </Box>

                </Box>

            </Box>

        </Box>

    )
}
