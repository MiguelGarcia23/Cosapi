import { FC } from 'react';

import { Box } from '@mui/material';

import { Layout } from '../components/layouts/Layout';
import { BannerAboutUs, BodyAboutUs } from '../components/sobreNosotros';


const sobreNosotros: FC = () => {

    return (

        <Layout title='Sobre Nosotros'>

            <Box>

                <BannerAboutUs />

                <BodyAboutUs />

            </Box>

        </Layout>

    )
}

export default sobreNosotros