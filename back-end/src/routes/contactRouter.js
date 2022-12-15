/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de contacto */
const contactController = require ('../controllers/contactController');

/* Configuramos el envío a la vista de contacto */
router.post ('/', contactController.sendMessage);

/* Exportamos la variable router */
module.exports = router;