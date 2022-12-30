import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Input, TextField, Typography, styled, FormControl, FormHelperText } from '@mui/material';
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


export const BodyCreateProject: FC = () => {

    let [ data, setData ] = useState({
        name: '',
        duration: '',
        year: '',
        image_project: '',
        image_company: '',
        services: ''
    });

    let [ errorsState, setErrorsState ] = useState({
        name: false,
        duration: false,
        year: false,
        image_project: false,
        image_company: false,
        services: false
    });

    let [ isErrorState, setIsErrorState ] = useState( false );

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const handleInputChange = ( event: any ) => {

        let isError = false;
        let errors: any = errorsState;
        let regexNumbers = /^\d+$/;
        let acceptedExtensionsImgs = [ 'image/jpeg', 'image/jpg', 'image/png' ];

        if ( event.target.name === 'name' && event.target.value.length > 49 ) {
            errors.name = 'El campo "Nombre de empresa" debe tener menos de 50 caracteres';
            isError = true;
        }

        if ( event.target.name === 'duration' && !regexNumbers.test( event.target.value ) ) {
            errors.duration = 'El campo "Tiempo de duración" solo acepta números';
            isError = true;
        } else if ( event.target.name === 'duration' && event.target.value.length > 3 ) {
            errors.duration = 'El campo "Tiempo de duración" debe tener menos de 4 números';
            isError = true;
        }

        if ( event.target.name === 'year' && !regexNumbers.test( event.target.value ) ) {
            errors.year = 'El campo "Año del proyecto" solo acepta números';
            isError = true;
        } else if ( event.target.name === 'year' && event.target.value.length !== 4 ) {
            errors.year = 'El campo "Año del proyecto" debe tener 4 números';
            isError = true;
        }

        if ( event.target.name === 'image_project' && !acceptedExtensionsImgs.includes( event.target.files[0].type ) ) {
            errors.image_project = 'Las extensiones de archivo permitidas son .jpg, .jpeg y .png';
            isError = true;
        }

        if ( event.target.name === 'image_company' && !acceptedExtensionsImgs.includes( event.target.files[0].type ) ) {
            errors.image_company = 'Las extensiones de archivo permitidas son .jpg, .jpeg y .png';
            isError = true;
        }

        if ( !isError ) {
            setData({
                ...data,
                [event.target.name] : ( event.target.name === 'image_project' || event.target.name === 'image_company' ? event.target.files[0] : event.target.value ),
            })
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

    const handleInputBlur = ( event: any ) => {

        let isError = false;
        let errors: any = errorsState;
        var regexNumbers = /^\d+$/;
        let acceptedExtensionsImgs = [ 'image/jpeg', 'image/jpg', 'image/png' ];

        if ( event.target.name === 'name' && event.target.value.length > 49 ) {
            errors.name = 'El campo "Nombre de empresa" debe tener menos de 50 caracteres';
            isError = true;
        }

        if ( event.target.name === 'duration' && !regexNumbers.test( event.target.value ) ) {
            errors.duration = 'El campo "Tiempo de duración" solo acepta números';
            isError = true;
        } else if ( event.target.name === 'duration' && event.target.value.length > 3 ) {
            errors.duration = 'El campo "Tiempo de duración" debe tener menos de 4 números';
            isError = true;
        }

        if ( event.target.name === 'year' && !regexNumbers.test( event.target.value ) ) {
            errors.year = 'El campo "Año del proyecto" solo acepta números';
            isError = true;
        } else if ( event.target.name === 'year' && event.target.value.length !== 4 ) {
            errors.year = 'El campo "Año del proyecto" debe tener 4 números';
            isError = true;
        }

        if ( event.target.name === 'image_project' && event.target.files[0] && !acceptedExtensionsImgs.includes( event.target.files[0].type ) ) {
            errors.image_project = 'Las extensiones de archivo permitidas son .jpg, .jpeg y .png';
            isError = true;
        }

        if ( event.target.name === 'image_company' && event.target.files[0] && !acceptedExtensionsImgs.includes( event.target.files[0].type ) ) {
            errors.image_company = 'Las extensiones de archivo permitidas son .jpg, .jpeg y .png';
            isError = true;
        }

        if ( !isError ) {
            setData({
                ...data,
                [event.target.name] : ( event.target.name === 'image_project' || event.target.name === 'image_company' ? event.target.files[0] : event.target.value ),
            })
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

    let newServicesArray: any = [];

    const handleCheckboxChange = async ( event: any ) => {

        let service: string = event.target.value;

        if ( !newServicesArray.includes( service ) ) {
            newServicesArray.push( service );
        } else {
            newServicesArray = newServicesArray.filter( ( item: string ) => {
                return item !== service;
            })
        }

    };

    const router = useRouter();

    const handleSubmit = ( event: any ) => {
        event.preventDefault();
        
        let isError = false;

        if ( isErrorState === true ) {
            isError = true;
        }

        let errors: any = {};

        if ( !data.name.trim() ) {
            errors.name = 'El campo "Nombre de empresa" no debe estar vacío';
            isError = true;
        }

        if ( !data.duration.trim() ) {
            errors.duration = 'El campo "Tiempo de duración" no debe estar vacío';
            isError = true;
        }

        if ( !data.year.trim() ) {
            errors.year = 'El campo "Año del proyecto" no debe estar vacío';
            isError = true;
        }

        if ( !data.image_project ) {
            errors.image_project = 'Debe subir una imagen en el campo "Imagen del proyecto"';
            isError = true;
        }

        if ( !data.image_company ) {
            errors.image_company = 'Debe subir una imagen en el campo "Imagen de la empresa"';
            isError = true;
        }

        if ( !newServicesArray.join(', ').trim() && !data.services.trim() ) {
            errors.services = 'Debe seleccionar una opción en el campo "Servicios ofrecidos"';
            isError = true;
        }

        if ( !isError ) {

            if ( data.services ) {
                newServicesArray = data.services;
            }

            alert( 'Nombre: ' + data.name + '\nDuración: ' + data.duration + '\nAño: ' + data.year + '\nImagen del proyecto: ' + data.image_project + '\nImagen de la empresa: ' + data.image_company + '\nServicios: ' + ( data.services ? data.services : newServicesArray ) );
            
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('duration', data.duration);
            formData.append('year', data.year);
            formData.append('image_project', data.image_project);
            formData.append('image_company', data.image_company);
            formData.append('services', data.services ? data.services : newServicesArray.join(', '));
            
            fetch('http://localhost:3030/admin/crear', {
                method: "POST",
                body: formData,
            })
                .then(response => {
                    return response.json()
                });
            
            event.target.reset();
            router.push('/proyectos');
        } else {
            setIsErrorState( true );
            setErrorsState( errors );

            setData({
                ...data,
                services: newServicesArray.join(', ')
            })
        }

    }

    return (

        <Box className={ styles['create-project-body'] } data-aos='fade-up'>

            <Typography variant='h2' color='info.dark'>Crear Proyecto</Typography>

            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: '1 auto', width: '100%' },
                }}
                noValidate
                autoComplete='off'
                encType='multipart/form-data'
                onSubmit={ handleSubmit }
            >
                <Grid container spacing={ 2 } sx={{ marginBottom: '1.5rem' }}>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField error={ errorsState.name } id='custom-css-filled-input' name='name' label='Nombre de empresa' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.name } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField error={ errorsState.duration } id='custom-css-filled-input' name='duration' label='Tiempo de duración (en días)' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.duration } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField error={ errorsState.year } id='custom-css-filled-input' name='year' label='Año del proyecto' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.year } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen del proyecto</Typography>
                        <Input error={ errorsState.image_project } id='custom-css-filled-input' type='file' name='image_project' sx={{ width: '100%' }} onChange={ handleInputChange } onBlur={ handleInputBlur } />
                        { errorsState.image_project && <div className={ styles['alert-error-input-file'] }>{ errorsState.image_project }</div> }
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen de la empresa</Typography>
                        <Input error={ errorsState.image_company } id='custom-css-filled-input' type='file' name='image_company' sx={{ width: '100%' }} onChange={ handleInputChange } onBlur={ handleInputBlur } />
                        { errorsState.image_company && <p className={ styles['alert-error-input-file'] }>{ errorsState.image_company }</p> }
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Servicios ofrecidos</Typography>
                        <FormControl
                            error={ errorsState.services }
                            variant="outlined"
                        >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='instalacion' />} label='Instalación' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='mantenimiento' />} label='Mantenimiento y reparación' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='calibracion' />} label='Calibración' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='automatizacion' />} label='Automatización' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='suministro' />} label='Suministro y alquiler' onChange={ handleCheckboxChange } />
                            </FormGroup>

                            <FormHelperText>{ errorsState.services }</FormHelperText>
                        </FormControl>
                    </Grid>
                
                </Grid>

                <Box className={ styles['form-create-project-button-box'] }>
                    <Button type='submit' variant='contained' color='secondary' className={ styles['form-create-project-button'] }>
                        Enviar
                    </Button>
                </Box>

            </Box>
            
        </Box>

    )
}
