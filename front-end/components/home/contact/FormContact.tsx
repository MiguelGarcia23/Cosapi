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

    let [ errorsState, setErrorsState ] = useState({
        name: false,
        lastName: false,
        email: false,
        phone: false,
        message: false
    });

    let [ isErrorState, setIsErrorState ] = useState( false );

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const handleInput = ( event: any ) => {

        let isError = false;
        let errors: any = errorsState;
        let regexEmail: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regexPhone: any = /^[0][2|4]\d{2}[-]?\d{7}$/;

        if ( event.target.name === 'name' && event.target.value.length <= 1 && event.target.value.length >= 20 ) {
            errors.name = 'El campo "Nombre" debe tener más de 1 caracter y menos de 20 caracteres';
            isError = true;
        }

        if ( event.target.name === 'lastName' && event.target.value.length <= 1 && event.target.value.length >= 20 ) {
            errors.lastName = 'El campo "Apellido" debe tener más de 1 caracter y menos de 20 caracteres';
            isError = true;
        }

        if( event.target.name === 'email' && !regexEmail.test( event.target.value ) ) {
            errors.email = 'El campo "Email" debe tener formato de correo electrónico. Ej: cosapi@gmail.com';
            isError = true;
        }

        if( event.target.name === 'phone' && !regexPhone.test( event.target.value ) ) {
            errors.phone = 'El campo "Teléfono" debe tener formato de télefono. Ej: 04241234567';
            isError = true;
        }

        if ( event.target.name === 'message' && event.target.value.length >= 200 ) {
            errors.message = 'El campo "Mensaje" debe tener menos de 200 caracteres';
            isError = true;
        }

        if ( !isError ) {
            setData({
                ...data,
                [event.target.name] : event.target.value
            });
            setIsErrorState( false );
            setErrorsState({
                ...errorsState,
                [event.target.name] : false
            })
        } else {
            setIsErrorState( true );
            setErrorsState( errors );
        }

    };

    const router = useRouter();

    const handleSubmit = ( event: any ) => {

        event.preventDefault();

        let isError = isErrorState;

        let errors: any = {};

        if ( !data.name.trim() || data.name.trim().length < 0 ) {
            errors.name = 'El campo "Nombre" no debe estar vacío';
            isError = true;
        }

        if ( !data.name.trim() || data.lastName.trim().length < 0 ) {
            errors.lastName = 'El campo "Apellido" no debe estar vacío';
            isError = true;
        }

        if ( !data.name.trim() || data.email.trim().length < 0 ) {
            errors.email = 'El campo "Email" no debe estar vacío';
            isError = true;
        }

        if ( !data.name.trim() || data.phone.trim().length < 0 ) {
            errors.phone = 'El campo "Teléfono" no debe estar vacío';
            isError = true;
        }

        if ( !data.name.trim() || data.message.trim().length < 0 ) {
            errors.message = 'El campo "Mensaje" no debe estar vacío';
            isError = true;
        }

        if ( !isError ) {

            alert( 'Nombre: ' + data.name + '\nApellido: ' + data.lastName + '\nEmail: ' + data.email + '\nTeléfono: ' + data.phone + '\nMessage: ' + data.message );
    
            emailjs.sendForm('service_qy5hf32', 'template_3t88tnf', event.target, 'c3fFxPI_Tq-Hjp0i_');
    
            event.target.reset();
    
            router.push('/contacto/formularioEnviado');

        } else {
            setIsErrorState( true );
            setErrorsState( errors );
        }

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
                            <CssTextField error={ errorsState.name } id='custom-css-filled-input' name='name' label='Nombre' variant='filled' onChange={ handleInput } onBlur={ handleInput } helperText={ errorsState.name } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField error={ errorsState.lastName } id='custom-css-filled-input' name='lastName' label='Apellido' variant='filled' onChange={ handleInput } onBlur={ handleInput } helperText={ errorsState.lastName } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField error={ errorsState.email } id='custom-css-filled-input' name='email' label='Email' variant='filled' onChange={ handleInput } onBlur={ handleInput } helperText={ errorsState.email } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField error={ errorsState.phone } id='custom-css-filled-input' name='phone' label='Teléfono' variant='filled' onChange={ handleInput } onBlur={ handleInput } helperText={ errorsState.phone } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 }>
                            <CssTextField error={ errorsState.message } multiline id='filled-textarea' name='message' label='Mensaje' placeholder='Mensaje' variant='filled' onChange={ handleInput } onBlur={ handleInput } helperText={ errorsState.message } />
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
