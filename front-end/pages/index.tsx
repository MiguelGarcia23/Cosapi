import type { NextPage } from 'next';

import { Box } from '@mui/material';

import { Layout } from '../components/layouts';
import { FormContact, Gallery, MainBanner, MainServices, Welcome } from '../components/home';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Box>

        <MainBanner />

        <Welcome />

        <MainServices />

        <Gallery />

        <FormContact />

      </Box>
    </Layout>
  )
}

export default HomePage;