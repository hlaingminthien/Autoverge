import { NextFunction, Request, Response } from 'express';
import db_manager from '../db_manager/user.manager';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Login(req.body)
        .then((data: any) => {
            console.log('data is=>', data);
            console.log('req.body is=>', req.body);
            bcrypt.compare(req.body.password, data.password, function (err: any, res1: any) {
                console.log('err is=>', err);
                console.log('res1 is=>', res1);
                if (res1) {
                    jwt.sign({ name: req.body.userName }, 'secretkey', (jwterr: any, token: any) => {
                        console.log('hello');
                        if (jwterr) {
                            res.status(403);
                            res.send(jwterr);
                        } else {
                            console.log('token is=>', token);
                            let returnData = { token: token, success: true };
                            res.send(returnData);
                        }
                    });
                } else {
                    res.send(err);
                }
            });
        })
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const Logout = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .GetById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

export default { Login, Logout };
