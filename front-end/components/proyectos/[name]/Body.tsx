import { FC } from 'react';

import { Box } from '@mui/material';

import { Project } from '../../../interfaces';
import { IntroProject } from './Intro';
import { ServicesProject } from './Services';
import { InfoProject } from './Info';

import styles from './Body.module.css';

interface Props {
    project: Project;
}


export const BodyProject: FC<Props> = ({ project }) => {

    return (
        
        <Box className={ styles['project-body'] }>

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
