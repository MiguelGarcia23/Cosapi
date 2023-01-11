import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { Project } from '../../../interfaces';
import { CardProject } from './CardProject';

import styles from './Body.module.css';

interface Props {
    projects: Project[];
}


export const BodyProjects: FC<Props> = ({ projects }) => {

    return (

        <Box className={ styles['projects-body'] }>

            <Grid container spacing={ 2 }>

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