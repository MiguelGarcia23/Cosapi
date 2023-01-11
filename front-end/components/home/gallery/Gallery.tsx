import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Typography, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Project } from '../../../interfaces';
import { CardGallery } from './CardGallery';

import styles from './Gallery.module.css';

interface Props {
    projects: Project[];
}


export const Gallery: FC<Props> = ({ projects }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const router = useRouter();

    const handleClick = (): void => {
        router.push('/proyectos')
    }

    return (

        <Box data-aos='fade-up' className={ styles['gallery-home'] }>

            <Typography variant='h2' color='info.dark'>Galería de proyectos</Typography>

            <Grid container spacing={ 2 }>

                {
                    projects.map( ({ id, name, year, image_project }) => {

                        return(
                            <CardGallery 
                                key={ id } 
                                img={ image_project }
                                alt={`Imagen de ${ name }`}
                                year={ year.toString() }
                                title={ name }
                            />
                        )

                    })
                }

            </Grid>

            <Button variant="outlined" color="secondary" className={ styles['gallery-home-button'] } onClick={ handleClick }>
                <Typography variant="h5" color="info.dark">Ver más proyectos</Typography>
            </Button>

        </Box>
        
    )
}
