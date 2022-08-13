import { NextFunction, Request, Response } from 'express';
import db_manager from '../db_manager/service.manager';

const CreateService = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Create(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetService = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Get()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetServiceById = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .GetById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const UpdateService = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Update(req.body)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const DeleteService = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Delete(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

export default { CreateService, GetService, UpdateService, GetServiceById, DeleteService };
