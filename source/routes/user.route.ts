import express from 'express';
import controller from '../controller/user.controller';

const router = express.Router();

router.post('/create', controller.CreateUser);
router.post('/update', controller.UpdateUser);
router.get('/list', controller.GetUser);
router.get('/:id', controller.GetUserById);

export = router;
