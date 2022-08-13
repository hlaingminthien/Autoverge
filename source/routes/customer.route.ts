import express from 'express';
import controller from '../controller/customer.controller';

const router = express.Router();

router.post('/create', controller.CreateCustomer);
router.post('/update', controller.UpdateCustomer);
router.get('/list', controller.GetCustomer);
router.get('/:id', controller.GetCustomerById);

export = router;
