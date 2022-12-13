import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BodyCreateProject } from '../../components/proyectos';


const CreateProjectPage: FC = () => {

    return (

        <Layout title='Crear proyecto'>

            <Box>

                <BodyCreateProject />

            </Box>

        </Layout>

    )
}

export default CreateProjectPage;