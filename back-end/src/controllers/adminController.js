const db = require("../database/models");

/* Configuramos el controlador */
const adminController = {

    create: ( req, res ) => {

        db.Projects.create({
            name: req.body.name,
            duration: req.body.duration,
            year: req.body.year,
            image_project: req.files.image_project[0].filename,
            image_company: req.files.image_company[0].filename,
            services: req.body.services
        })
            .then( res => {
                res.send( res );
            })
            .catch( e => {
                res.send( e )
            })
      
    },

    edit: ( req, res ) => {

        db.Projects.findOne({
            where: {
                name: req.params.name
            }
        })
            .then( project => {

                db.Projects.update({
                    name: req.body.name,
                    duration: req.body.duration,
                    year: req.body.year,
                    image_project: req.files ? req.files.image_project[0].filename : project.image_project,
                    image_company: req.files ? req.files.image_company[0].filename : project.image_company,
                    services: req.body.services
                },{
                    where: {
                        name: req.params.name
                    }
                })

            })
                .then( res => {
                    res.send( res );
                })
                .catch( e => {
                    res.send( e )
                })
      
    }

}

/* Exportamos el controlador */
module.exports = adminController;