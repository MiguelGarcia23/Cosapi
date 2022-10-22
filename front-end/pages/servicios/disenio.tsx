import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../../components/layouts';
import { BannerDesign, BodyDesing } from '../../components/servicios/diseño';


const DesignPage: FC = () => {

    return (

        <Layout title='Diseño'>

            <Box>

                <BannerDesign />

                <BodyDesing />

            </Box>

        </Layout>

    )
}

export default DesignPage;