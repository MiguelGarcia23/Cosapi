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

            {/* <Box sx={{ marginBottom: '3.75rem' }}>
                <Typography variant='h4' color='info.dark' fontWeight={ 500 }>
                    Nuestros
                </Typography>

                <Typography variant='h2' color='info.dark' sx={{ textAlign: 'left', marginBottom: '3.75rem' }}>
                    Proyectos
                </Typography>
            </Box> */}

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

                {/* <CardProject 
                    img='/petromonagas.png'
                    alt='Imagen de Petromonagas'
                    year='2020'
                    title='Petromonagas'
                />

                <CardProject 
                    img='/pdvsa-gas.png'
                    alt='Imagen de PDVSA Gas'
                    year='2021'
                    title='PDVSA Gas'
                />

                <CardProject 
                    img='/petrosucre.png'
                    alt='Imagen de Petrosucre'
                    year='2020'
                    title='Petrosucre'
                />

                <CardProject 
                    img='/petrodelta.png'
                    alt='Imagen de Petrodelta'
                    year='2021'
                    title='Petrodelta'
                />

                <CardProject 
                    img='/pdvsa-gas.png'
                    alt='Imagen de PDVSA'
                    year='2021'
                    title='PDVSA'
                /> */}

            </Grid>


        </Box>

    )
}

/* export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await backend.get<ProjectListResponse>('/proyectos');

    const projects: Project[] = data.projects;

    return {
      props: {
        projects
      }
    }
} */