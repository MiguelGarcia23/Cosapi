import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Grid, Typography, TextField, styled, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

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

    let [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const handleInputChange = ( event: any ) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    };

    const router = useRouter();

    const handleSubmit = ( event: any ) => {
        event.preventDefault()
        alert( 'Nombre: ' + data.name + '\nApellido: ' + data.lastName + '\nEmail: ' + data.email + '\nTeléfono: ' + data.phone + '\nMessage: ' + data.message );

        emailjs.sendForm('service_qy5hf32', 'template_3t88tnf', event.target, 'c3fFxPI_Tq-Hjp0i_');

        event.target.reset();

        router.push('/')
    }

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
                    onSubmit={ handleSubmit }
                >
                    <Grid container spacing={ 2 } sx={{ marginBottom: '1.5rem' }}>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' name='name' label='Nombre' variant='filled' onChange={ handleInputChange } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' name='lastName' label='Apellido' variant='filled' onChange={ handleInputChange } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' name='email' label='Email' variant='filled' onChange={ handleInputChange } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField id='custom-css-filled-input' name='phone' label='Teléfono' variant='filled' onChange={ handleInputChange } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 }>
                            <CssTextField multiline id='filled-textarea' name='message' label='Mensaje' placeholder='Mensaje' variant='filled' onChange={ handleInputChange } />
                        </Grid>
                    
                    </Grid>

                    <Box className={ styles['form-contact-home-button-box'] }>
                        <Button type='submit' variant='contained' color='secondary' className={ styles['form-contact-home-button'] }>
                            Enviar
                        </Button>
                    </Box>

                </Box>

            </Box>

        </Box>

    )
}
