import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../components/layouts';
import { NotFound } from '../components/404';


const NotFoundPage: FC = () => {

    return (

        <Layout title='Error 404'>

            <Box>

                <NotFound />

            </Box>

        </Layout>
        
    )
}

export default NotFoundPage;