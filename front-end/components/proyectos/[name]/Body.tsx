import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Typography } from '@mui/material';

import { Project } from '../../../interfaces';
import { IntroProject } from './Intro';
import { ServicesProject } from './Services';
import { InfoProject } from './Info';

import styles from './Body.module.css';

interface Props {
    project: Project;
}


export const BodyProject: FC<Props> = ({ project }) => {

    let [ storage, setStorage ] = useState( '' );

    const router = useRouter();

    useEffect(() => {
        setStorage( localStorage.getItem('auth') || "" );
    }, [])

    const handleClick = () => {
        router.push(`/admin/editar/${ project.name }`)
    }

    return (
        
        <Box className={ styles['project-body'] }>

            { storage === 'true' && 
                <Button variant='contained' color='secondary' style={{ display: 'block', padding: '0.625rem 1.25rem', borderRadius: '8px', margin: '0 auto', marginBottom: '1rem' }} onClick={ handleClick }>
                    <Typography variant='h5' color='info.main' textTransform='capitalize'>Editar Proyecto</Typography>
                </Button>  
            }

            <IntroProject 
                name= { project.name }
                image_project= { project.image_project }
            />

            <ServicesProject 
                services= { project.services }
            />

            <InfoProject 
                duration= { project.duration }
                image_company= { project.image_company }
                year= { project.year }
            />

        </Box>

    )
}
