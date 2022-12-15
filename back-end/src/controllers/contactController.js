const db = require("../database/models");
const Op = db.Sequelize.Op;

/* Configuramos el controlador */
const contactController = {

    sendMessage: ( req, res ) => {

        db.Projects.create({
            ...req.body
        })
            .then(() => {
                res.redirect('/');
            })
            .catch(e => {
                res.send(e)
            })

    }

}

/* Exportamos el controlador */
module.exports = contactController;