import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Input, TextField, Typography, styled } from '@mui/material';
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
        image_company: ''
    });

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const handleInputChange = ( event: any ) => {
        setData({
            ...data,
            [event.target.name] : ( event.target.name === 'image_project' || event.target.name === 'image_company' ? event.target.files[0] : event.target.value ),
        })
    };

    let newServicesArray: string[] = [];

    const handleCheckboxChange = async ( event: any ) => {

        let service: string = event.target.value;

        if ( !newServicesArray.includes( service ) ) {
            newServicesArray.push( service );
        } else {
            newServicesArray = newServicesArray.filter( item => {
                return item !== service;
            })
        }

    }

    const router = useRouter();

    const handleSubmit = ( event: any ) => {
        event.preventDefault();

        alert( 'Nombre: ' + data.name + '\nDuración: ' + data.duration + '\nFecha: ' + data.year + '\nImagen del proyecto: ' + data.image_project + '\nImagen de la empresa: ' + data.image_company + '\nServicios: ' + newServicesArray );
        
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('duration', data.duration);
        formData.append('year', data.year);
        formData.append('image_project', data.image_project);
        formData.append('image_company', data.image_company);
        formData.append('services', newServicesArray.join(', '));

        /* for ( let entry of formData.entries() ) {
            console.log( entry );
        } */
        
        fetch('http://localhost:3030/admin/crear', {
            method: "POST",
            body: formData,
        })
            .then(response => {
                return response.json()
            });
        
        event.target.reset();
        router.push('/proyectos')
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
                        <CssTextField id='custom-css-filled-input' name='name' label='Nombre de empresa' variant='filled' onChange={ handleInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField id='custom-css-filled-input' name='duration' label='Tiempo de duración' variant='filled' onChange={ handleInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField id='custom-css-filled-input' name='year' label='Fecha del proyecto' variant='filled' onChange={ handleInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen del proyecto</Typography>
                        <Input id='custom-css-filled-input' type='file' name='image_project' sx={{ width: '100%' }} onChange={ handleInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen de la empresa</Typography>
                        <Input id='custom-css-filled-input' type='file' name='image_company' sx={{ width: '100%' }} onChange={ handleInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Servicios ofrecidos</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox color='secondary' name='services' value='instalacion' />} label='Instalación' onChange={ handleCheckboxChange } />
                            <FormControlLabel control={<Checkbox color='secondary' name='services' value='mantenimiento' />} label='Mantenimiento y reparación' onChange={ handleCheckboxChange } />
                            <FormControlLabel control={<Checkbox color='secondary' name='services' value='automatizacion' />} label='Automatización' onChange={ handleCheckboxChange } />
                            <FormControlLabel control={<Checkbox color='secondary' name='services' value='suministro' />} label='Suministro' onChange={ handleCheckboxChange } />
                        </FormGroup>
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
