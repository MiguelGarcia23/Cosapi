import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BodyProject } from '../../components/proyectos';

const ProjectPage: FC = () => {

    return (

        <Layout title='Proyecto nombre'>

            <Box>

                <BodyProject />

            </Box>

        </Layout>

    )
}

export default ProjectPage;