/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de proyectos */
const projectsController = require ('../controllers/projectsController');

/* Configuramos el envío a la home de proyectos */
router.get ('/', projectsController.allProjects);

/* Configuramos el envío a la vista particular de cada proyecto */
router.get ('/:name', projectsController.projectDetail);

/* Exportamos la variable router */
module.exports = router;