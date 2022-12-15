export interface ProjectListResponse {
    projects: Project[];
    status:   number;
}

export interface Project {
    id:            number;
    name:          string;
    duration:      number;
    year:          number;
    image_project: string;
    image_company: string;
    services:      string[];
}
