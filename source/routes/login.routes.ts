import express from 'express';
import controller from '../controller/login.controller';

const router = express.Router();

router.post('/login', controller.Login);

router.post('/logout', controller.Logout);
export = router;
