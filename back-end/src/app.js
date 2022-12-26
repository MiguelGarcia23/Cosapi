/* Importando el módulo Express */
const express = require('express');

/* Importando el módulo de session */
const session = require('express-session');

/* Importando el módulo de cookie-parser */
const cookies = require('cookie-parser');

/* Requerimos el módulo methodOverride */
const methodOverride = require('method-override');

/* Importando el módulo de cors */
const cors = require('cors');

/* Importado el módulo nativo path en la variable path */
/* const path = require('path'); */

/* Guardando en la variable app la ejecución de la función Express */
const app = express();

/* Importando el middleware de usuario logueado */
/* const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware') */

/* Estableciendo las configuraciones de cors */
const corsOptions ={
  origin: 'http://localhost:3000', 
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

/* Usamos el cors */
app.use(cors(corsOptions));

/* Configurando el uso de session */
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false
}));

/* Ejecutando el módulo de cookies */
app.use(cookies());

/* Aplicando el middleware global de usuario logueado */
/* app.use(userLoggedMiddleware); */

/* Usamos el methodOverride */
app.use(methodOverride('_method'));

/* Realizamos las configuraciones para poder usar el req.body */
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

/* Estableciendo los archivos estáticos */
app.use(express.static('public'));

/* Importamos la ruta de proyectos */
const projectsRouter = require('./routes/projectsRouter');

/* Importamos la ruta de contacto */
const contactRouter = require('./routes/contactRouter');

/* Importamos la ruta de admin */
const adminRouter = require('./routes/adminRouter');

/* Envío a la ruta de proyectos */
app.use ('/proyectos', projectsRouter);

/* Envío a la ruta de contacto */
app.use ('/contacto', contactRouter);

/* Envío a la ruta de admin */
app.use ('/admin', adminRouter);

/* Error 404 */
/* app.use((req, res, next) => {
  res.status(404).render('404-page');
  next()
}) */

/* Levantando el servidor */
app.listen(process.env.PORT || 3030, () => {
    console.log("Servidor corriendo en http://localhost:3030/");
});