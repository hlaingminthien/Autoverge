import express from 'express';
import controller from '../controller/service.controller';

const router = express.Router();

router.post('/create', controller.CreateService);
router.post('/update', controller.UpdateService);
router.get('/list', controller.GetService);
router.get('/:id', controller.GetServiceById);
router.get('/delete/:id', controller.DeleteService);

export = router;
