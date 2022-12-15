import { FC, useEffect } from 'react';

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


export const BodyEditProject: FC = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (

        <Box className={ styles['edit-project-body'] } data-aos='fade-up'>

            <Typography variant='h2' color='info.dark'>Editar Proyecto: Petrosucre</Typography>

            <Box
                component='form'
                sx={{
                    '& .MuiTextField-root': { m: '1 auto', width: '100%' },
                }}
                noValidate
                autoComplete='off'
            >
                <Grid container spacing={ 2 } sx={{ marginBottom: '1.5rem' }}>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField id='custom-css-filled-input' label='Nombre de empresa' variant='filled' />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField id='custom-css-filled-input' label='Tiempo de duración' variant='filled' />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <CssTextField id='custom-css-filled-input' label='Fecha del proyecto' variant='filled' />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen del proyecto</Typography>
                        <Input id='custom-css-filled-input' type='file' sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Imagen de la empresa</Typography>
                        <Input id='custom-css-filled-input' type='file' sx={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 8 } sx={{ margin: '0 auto' }}>
                        <Typography variant='body1' fontWeight={ 700 } color='info.dark' sx={{ marginBottom: '0.5rem' }}>Servicios ofrecidos</Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox color='secondary' />} label='Instalación' />
                            <FormControlLabel control={<Checkbox color='secondary' />} label='Mantenimiento y reparación' />
                            <FormControlLabel control={<Checkbox color='secondary' />} label='Automatización' />
                            <FormControlLabel control={<Checkbox color='secondary' />} label='Suministro' />
                        </FormGroup>
                    </Grid>
                
                </Grid>

                <Box className={ styles['form-edit-project-button-box'] }>
                    <Button variant='contained' color='secondary' className={ styles['form-edit-project-button'] }>
                        Enviar
                    </Button>
                </Box>

            </Box>
            
        </Box>

    )
}