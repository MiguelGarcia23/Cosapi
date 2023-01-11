/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de proyectos */
const projectsController = require ('../controllers/projectsController');

/* Configuramos el envío de todos los proyectos de la DB */
router.get ('/', projectsController.allProjects);

/* Configuramos el envío de los primeros 4 proyectos de la DB */
router.get ('/favoritos', projectsController.favoriteProjects);

/* Configuramos el envío de cada proyecto de la DB */
router.get ('/:name', projectsController.projectDetail);

/* Exportamos la variable router */
module.exports = router;