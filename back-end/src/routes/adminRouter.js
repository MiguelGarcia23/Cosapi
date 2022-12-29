/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de admin */
const adminController = require ('../controllers/adminController');

/* Importamos el middleware Multer */
const multerMiddlewareProject = require('../middlewares/uploadProject');
/* const multerMiddlewareCompany = require('../middlewares/uploadCompany'); */

/* Configuramos el envío a la vista de creación de proyecto */
router.post ('/crear', multerMiddlewareProject.fields([{
    name: 'image_project', maxCount: 1
}, {
    name: 'image_company', maxCount: 1
}]), adminController.create);

/* Configuramos el envío a la vista de edición de proyecto */
router.post ('/editar/:name', multerMiddlewareProject.fields([{
    name: 'image_project', maxCount: 1
}, {
    name: 'image_company', maxCount: 1
}]), adminController.edit);

/* Exportamos la variable router */
module.exports = router;