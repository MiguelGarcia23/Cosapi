import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BannerProjects, BodyProjects } from '../../components/proyectos';


const ProjectsPage: FC = () => {

    return (

        <Layout title='Proyectos'>

            <Box>

                <BannerProjects />

                <BodyProjects />

            </Box>

        </Layout>

    )
}

export default ProjectsPage;