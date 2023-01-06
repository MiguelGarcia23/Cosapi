import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Grid, Typography, TextField, styled, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Body.module.css';

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


export const BodyLoginAdmin: FC = () => {

    let [data, setData] = useState({
        user: '',
        password: ''
    });

    let [ errorsState, setErrorsState ] = useState({
        user: false,
        password: false
    });

    let [ isErrorState, setIsErrorState ] = useState( false );

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const handleInput = ( event: any ) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        });
    }

    const router = useRouter();

    const usuario = 'admin';
    const contrasenia = 'admin123';

    const handleSubmit = ( event: any ) => {

        event.preventDefault();

        let isError = isErrorState;

        let errors: any = {};

        if ( !data.user.trim() || data.user.trim().length < 0 ) {
            errors.user = 'El campo "Usuario" no debe estar vacío';
            isError = true;
        } else if ( data.user !== usuario ) {
            errors.user = 'El usuario ingresado es incorrecto';
            isError = true;
        }

        if ( !data.password.trim() || data.password.trim().length < 0 ) {
            errors.password = 'El campo "Contraseña" no debe estar vacío';
            isError = true;
        } else if ( data.password !== contrasenia ) {
            errors.password = 'La contraseña ingresada es incorrecta';
            isError = true;
        }

        if ( !isError ) {

            alert( 'Usuario: ' + data.user + '\nContraseña: ' + data.password );

            localStorage.setItem( 'auth', 'true' );
            
            event.target.reset();
    
            router.push('/admin/crear');

        } else {
            setIsErrorState( true );
            setErrorsState( errors );
        }

    }

    return (
        
        <Box className={ styles['login-form'] }>

            <Box data-aos='fade-up'>

                <Typography variant='h2' color='info.main' sx={{ marginBottom: '2.5rem' }}>
                    Iniciar sesión
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
                            <CssTextField error={ errorsState.user } id='custom-css-filled-input' name='user' label='Usuario' variant='filled' helperText={ errorsState.user } onChange={ handleInput } />
                        </Grid>

                        <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                            <CssTextField error={ errorsState.password } id='custom-css-filled-input' type="password" name='password' label='Contraseña' variant='filled' helperText={ errorsState.password } onChange={ handleInput } />
                        </Grid>
                    
                    </Grid>

                    <Box className={ styles['login-form-button-box'] }>
                        <Button type='submit' variant='contained' color='secondary' className={ styles['login-form-button'] }>
                            Enviar
                        </Button>
                    </Box>

                </Box>

            </Box>

        </Box>

    )
}
