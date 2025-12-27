import { Router } from 'express';
import ConsultationController from '../controllers/consultationController';

const router = Router();
const consultationController = new ConsultationController();

export const setRoutes = () => {
    router.post('/consultations', consultationController.createConsultation.bind(consultationController));
    router.get('/consultations', consultationController.getConsultations.bind(consultationController));
    
    return router;
};