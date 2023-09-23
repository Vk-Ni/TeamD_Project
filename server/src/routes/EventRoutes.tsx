import { Router } from "express";
import EventController from "../controllers/EventControllers";


const eventRoutes = Router();

const eventController = new EventController();

eventRoutes.post('/api/addevents',eventController.addEvent);
// eventRoutes.get('/api/getprojects',eventController.getProject);

export default eventRoutes;