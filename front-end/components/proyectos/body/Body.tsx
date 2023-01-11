import { FC, useEffect } from 'react';

import { Box, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Project } from '../../../interfaces';
import { CardProject } from './CardProject';

import styles from './Body.module.css';

interface Props {
    projects: Project[];
}


export const BodyProjects: FC<Props> = ({ projects }) => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (

        <Box className={ styles['projects-body'] }>

            <Grid container spacing={ 2 } data-aos='fade-up'>

                {
                    projects.map( ({ id, name, year, image_project }) => {
                        return (
                            <CardProject
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


        </Box>

    )
}