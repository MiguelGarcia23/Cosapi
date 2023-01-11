/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de admin */
const adminController = require ('../controllers/adminController');

/* Importamos el middleware Multer */
const multerMiddleware = require('../middlewares/uploadImage');

/* Configuramos la ruta de creación de proyecto */
router.post ('/crear', multerMiddleware.fields([{
    name: 'image_project', maxCount: 1
}, {
    name: 'image_company', maxCount: 1
}]), adminController.create);

/* Configuramos la ruta de edición de proyecto */
router.post ('/editar/:name', multerMiddleware.fields([{
    name: 'image_project', maxCount: 1
}, {
    name: 'image_company', maxCount: 1
}]), adminController.edit);

/* Exportamos la variable router */
module.exports = router;