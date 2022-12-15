const db = require("../database/models");
const Op = db.Sequelize.Op;

/* Configuramos el controlador */
const adminController = {

    create: ( req, res ) => {

        db.Projects.create({
            ...req.body
        })
            .then(() => {
                res.redirect('/projects');
            })
            .catch(e => {
                res.send(e)
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
                    ...req.body,
                    image: req.file ? req.file.filename : project.image
                },{
                    where: {
                        name: req.params.name
                    }
                })

            })
                .then(() => {
                    res.redirect('/projects');
                })
                .catch(e => {
                    res.send(e)
                })
      
    }

}

/* Exportamos el controlador */
module.exports = adminController;