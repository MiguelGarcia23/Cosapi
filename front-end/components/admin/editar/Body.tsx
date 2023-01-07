import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Input, TextField, Typography, styled, FormControl, FormHelperText } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Project } from '../../../interfaces';

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

interface Props {
    project: Project;
}


export const BodyEditProject: FC<Props> = ({ project }) => {

    let [ data, setData ] = useState({
        name: project.name,
        duration: project.duration,
        year: project.year,
        image_project: project.image_project,
        image_company: project.image_company,
        services: project.services
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

    let newServicesArray: any = data.services;

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

        if ( !data.duration ) {
            errors.duration = 'El campo "Tiempo de duración" no debe estar vacío';
            isError = true;
        }

        if ( !data.year ) {
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

        if ( !newServicesArray.join(', ').trim() && !data.services ) {
            errors.services = 'Debe seleccionar una opción en el campo "Servicios ofrecidos"';
            isError = true;
        }

        if ( !isError ) {

            alert( 'Nombre: ' + data.name + '\nDuración: ' + data.duration + '\nAño: ' + data.year + '\nImagen del proyecto: ' + data.image_project + '\nImagen de la empresa: ' + data.image_company + '\nServicios: ' + ( newServicesArray.length > 0 ? newServicesArray : data.services ) );
            
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('duration', data.duration.toString());
            formData.append('year', data.year.toString());
            formData.append('image_project', data.image_project);
            formData.append('image_company', data.image_company);
            formData.append('services', newServicesArray.length > 0 ? newServicesArray.join(', ') : data.services.join(', ') );
            
            fetch(`http://localhost:3030/admin/editar/${ project.name }`, {
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
                services: newServicesArray
            })
        }

    }

    return (

        <Box className={ styles['edit-project-body'] } data-aos='fade-up'>

            <Typography variant='h2' color='info.dark'>Editar Proyecto: { project.name }</Typography>

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
                        <CssTextField error={ errorsState.name } id='custom-css-filled-input' name='name' label='Nombre de empresa' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.name } defaultValue={ data.name } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField error={ errorsState.duration } id='custom-css-filled-input' name='duration' label='Tiempo de duración (en días)' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.duration } defaultValue={ data.duration } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField error={ errorsState.year } id='custom-css-filled-input' name='year' label='Año del proyecto' variant='filled' onChange={ handleInputChange } onBlur={ handleInputBlur } helperText={ errorsState.year } defaultValue={ data.year } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen del proyecto <em style={{ fontSize: '0.75rem', fontWeight: '400', color: '#FFDF00' }}>(Debe cargar de nuevo la imagen previa o una nueva imagen)</em></Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <Typography variant='body1' color='info.dark' sx={{ marginRight: '0.5rem' }}>Imagen previa: </Typography>
                            <Image 
                                src={`http:/localhost:3030/img/projects/${ project.image_project }`}
                                alt={`Imagen del proyecto de ${ project.name }`}
                                height={ 100 }
                                width={ 120 }
                            />
                        </Box>
                        <Input error={ errorsState.image_project } id='custom-css-filled-input' type='file' name='image_project' sx={{ width: '100%' }} onChange={ handleInputChange } onBlur={ handleInputBlur } />
                        { errorsState.image_project && <div className={ styles['alert-error-input-file'] }>{ errorsState.image_project }</div> }
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen de la empresa <em style={{ fontSize: '0.75rem', fontWeight: '400', color: '#FFDF00' }}>(Debe cargar de nuevo la imagen previa o una nueva imagen)</em></Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <Typography variant='body1' color='info.dark' sx={{ marginRight: '0.5rem' }}>Imagen previa: </Typography>
                            <Image 
                                src={`http:/localhost:3030/img/companies/${ project.image_company }`}
                                alt={`Imagen de la empresa de ${ project.name }`}
                                height={ 100 }
                                width={ 120 }
                            />
                        </Box>
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
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='instalacion' defaultChecked={ data.services.includes( 'instalacion' ) ? true : false } />} label='Instalación' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='mantenimiento' defaultChecked={ data.services.includes( 'mantenimiento' ) ? true : false } />} label='Mantenimiento y reparación' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='calibracion' defaultChecked={ data.services.includes( 'calibracion' ) ? true : false } />} label='Calibración' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='automatizacion' defaultChecked={ data.services.includes( 'automatizacion' ) ? true : false } />} label='Automatización' onChange={ handleCheckboxChange } />
                                <FormControlLabel control={<Checkbox color='secondary' name='services' value='suministro' defaultChecked={ data.services.includes( 'suministro' ) ? true : false } />} label='Suministro y alquiler' onChange={ handleCheckboxChange } />
                            </FormGroup>

                            <FormHelperText>{ errorsState.services }</FormHelperText>
                        </FormControl>
                    </Grid>
                
                </Grid>

                <Box className={ styles['form-edit-project-button-box'] }>
                    <Button type='submit' variant='contained' color='secondary' className={ styles['form-edit-project-button'] }>
                        Enviar
                    </Button>
                </Box>

            </Box>
            
        </Box>

    )
}