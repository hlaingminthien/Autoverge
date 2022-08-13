import { NextFunction, Request, Response } from 'express';
import db_manager from '../db_manager/customer.manager';

const CreateCustomer = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Create(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetCustomer = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Get()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetCustomerById = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .GetById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const UpdateCustomer = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Update(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

export default { CreateCustomer, GetCustomer, UpdateCustomer, GetCustomerById };
