import express from 'express';
import booking from './booking.route';
import login from './login.routes';
import customer from './customer.route';
import user from './user.route';
import service from './service.route';
const jwt = require('jsonwebtoken');

const router = express.Router();

router.use('/auth', login);
router.use((req, res, next) => {
    jwt.verify(req.headers['authentication-info'], 'secretkey', (verifyerr: any, authData: any) => {
        if (verifyerr) {
            res.sendStatus(401);
        } else {
            next();
        }
    });
});
router.use('/booking', booking);
router.use('/customer', customer);
router.use('/user', user);
router.use('/service', service);

export = router;
