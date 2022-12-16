import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Box } from '@mui/material';

import { backend } from '../../backend';
import { Project, ProjectListResponse } from '../../interfaces';
import { getProjectInfo } from '../../utils';
import { Layout } from '../../components/layouts';
import { BodyProject } from '../../components/proyectos';

interface Props {
    project: Project;
}


const ProjectPage: FC<Props> = ({ project }) => {

    return (

        <Layout title={`Proyecto ${ project.name }`}>

            <Box>

                <BodyProject 
                    project= { project }
                />

            </Box>

        </Layout>

    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await backend.get<ProjectListResponse>('/proyectos');

    const projectsNames: string[] = data.projects.map( project => project.name );

    return {
        paths: projectsNames.map( name => ({
            params: { name }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };

    const project = await getProjectInfo( name );

    if( !project ) {
        return {
            redirect: {
                destination: '/proyectos',
                permanent: false
            }
        }
    }
  
    return {
      props: {
        project,
        revalidate: 86400,
      }
    }
}

export default ProjectPage;