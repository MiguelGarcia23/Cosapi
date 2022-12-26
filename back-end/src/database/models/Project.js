module.exports = (sequelize, dataTypes) =>{

    let alias= 'Projects';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING
        },
        duration:{
            type: dataTypes.INTEGER
        },
        year:{
            type: dataTypes.INTEGER
        },
        image_project:{
            type: dataTypes.STRING
        },
        image_company:{
            type: dataTypes.STRING
        },
        services:{
            type: dataTypes.STRING
        }
    };

    let config ={
        tableName: 'projects',
        timestamps: false
    }

    const Projects = sequelize.define( alias, cols, config );

    return Projects;
}