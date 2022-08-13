import { NextFunction, Request, Response } from 'express';
import db_manager from '../db_manager/user.manager';
const bcrypt = require('bcrypt');

const CreateUser = (req: Request, res: Response, next: NextFunction) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    db_manager
        .Create(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetUser = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Get()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetUserById = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .GetById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const UpdateUser = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Update(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

export default { CreateUser, GetUser, UpdateUser, GetUserById };
