import type { NextPage } from 'next';

import { Box } from '@mui/material';

import { Layout } from '../components/layouts';
import { FormContact, Gallery, Infrastructure, MainBanner, MainServices, Welcome } from '../components/home';

const HomePage: NextPage = () => {

    return (

      <Layout title='Home'>
        
        <Box>

          <MainBanner />

          <Welcome />

          <MainServices />

          <Infrastructure />

          <Gallery />

          <FormContact />

        </Box>

      </Layout>

    )
}

export default HomePage;