import { backend } from "../backend";
import { Project } from "../interfaces";

export const getProjectInfo = async ( name: string ) => {
    
    try {
        
        const { data } = await backend.get(`/proyectos/${ name }`);

        return {
            id: data.project.id,
            name: data.project.name,
            duration: data.project.duration,
            year: data.project.year,
            image_project: data.project.image_project,
            image_company: data.project.image_company,
            services: data.project.services
        }

    } catch (error) {
        return null;
    }

}