import { FC } from 'react';

import { Box } from '@mui/material';

import authenticatedRoute from '../../auth/AuthenticatedRoute';
import { Layout } from '../../components/layouts';
import { BodyCreateProject } from '../../components/admin';


const CreateProjectPage: FC = () => {

    return (

        <Layout title='Crear proyecto'>

            <Box>

                <BodyCreateProject />

            </Box>

        </Layout>

    )
}

export default authenticatedRoute( CreateProjectPage )