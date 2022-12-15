/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de admin */
const adminController = require ('../controllers/adminController');

/* Configuramos el envío a la vista de creación de proyecto */
router.post ('/crear', adminController.create);

/* Configuramos el envío a la vista de edición de proyecto */
router.post ('/editar/:name', adminController.edit);

/* Exportamos la variable router */
module.exports = router;