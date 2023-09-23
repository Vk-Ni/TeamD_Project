import { Router } from "express";
import ProjectController from "../controllers/ProjectAllocation";


const projectRoutes = Router();

const ProjectControllerObj = new ProjectController();

projectRoutes.post('/api/addprojects',ProjectControllerObj.addProject);
projectRoutes.get('/api/getprojects',ProjectControllerObj.getProject);


export default projectRoutes;