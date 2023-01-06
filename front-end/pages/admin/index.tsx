import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BodyLoginAdmin } from '../../components/admin';


const LoginAdminPage: FC = () => {

    return (

        <Layout title='Login Admin'>

            <Box>

                <BodyLoginAdmin />

            </Box>

        </Layout>

    )
}

export default LoginAdminPage;