import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../../components/layouts';
import { BodyEditProject } from '../../../components/proyectos';


const EditProjectPage: FC = () => {

    return (

        <Layout title='Editar proyecto 1'>

            <Box>

                <BodyEditProject />

            </Box>

        </Layout>

    )
}

export default EditProjectPage;