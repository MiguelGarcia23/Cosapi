const db = require('../database/models');

/* Configuramos el controlador */
const projectsController = {

    allProjects: ( req, res ) => {

        db.Projects.findAll()
            .then(( projects ) => {

                let finalProjects = projects.map( project => {
                    return (
                        {
                            id: project.id,
                            name: project.name,
                            duration: project.duration,
                            year: project.year,
                            image_project: project.image_project,
                            image_company: project.image_company,
                            services: project.services.split(', ')
                        }
                    )
                })

                res.status(200).json({
                    projects: finalProjects,
                    status: 200,
                });

            })
            .catch((e) => {
                res.send(e)
            })

    },

    projectDetail: ( req, res ) => {

        db.Projects.findOne({
            where: {
                name: req.params.name
            }
        })
            .then(( project ) => {

                let finalProject = {
                    id: project.id,
                    name: project.name,
                    duration: project.duration,
                    year: project.year,
                    image_project: project.image_project,
                    image_company: project.image_company,
                    services: project.services.split(', ')
                }
    
                res.status(200).json({
                    project: finalProject,
                    status: 200,
                })

            })
            .catch((e) => {
                res.send(e)
            })

    }

}

/* Exportamos el controlador */
module.exports = projectsController;