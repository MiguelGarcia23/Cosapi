const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        if ( file.fieldname === 'image_project' ) {
            cb(null, 'public/img/projects');
        } else if ( file.fieldname === 'image_company' ) {
            cb(null, 'public/img/companies');
        }

    },

    filename: (req, file, cb) => {

        if ( file.fieldname === 'image_project' ) {
            let imageName = 'project-' + Date.now() + path.extname(file.originalname);
            cb(null, imageName)
        } else if ( file.fieldname === 'image_company' ) {
            let imageName = 'company-' + Date.now() + path.extname(file.originalname);
            cb(null, imageName)
        }
    }

})

const upload = multer({ storage });

module.exports = upload;