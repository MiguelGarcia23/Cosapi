import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Box } from '@mui/material';

import { backend } from '../backend';
import { Project, ProjectListResponse } from '../interfaces';
import { Layout } from '../components/layouts';
import { FormContact, Gallery, Infrastructure, MainBanner, MainServices, Welcome } from '../components/home';

interface Props {
  projects: Project[];
}


const HomePage: FC<Props> = ({ projects }) => {

    return (

      <Layout title='Home'>
        
        <Box>

          <MainBanner />

          <Welcome />

          <MainServices />

          <Infrastructure />

          <Gallery projects={ projects } />

          <FormContact />

        </Box>

      </Layout>

    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await backend.get<ProjectListResponse>('/proyectos/favoritos');

  const projects: Project[] = data.projects;

  return {
    props: {
      projects
    }
  }
}

export default HomePage;