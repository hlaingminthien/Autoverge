import { NextFunction, Request, Response } from 'express';
import db_manager from '../db_manager/booking.manager';
import EmailService from '../sendEmail';

const CreateBooking = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Create(req.body)
        .then((data: any) => {
            res.send(data);
            if (data.status != 1) {
                EmailService.send({ sentTo: data.email, status: data.status });
            }
        })
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetBooking = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Get()
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const GetBookingById = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .GetById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

const UpdateBooking = (req: Request, res: Response, next: NextFunction) => {
    db_manager
        .Update(req.body)
        .then((data: any) => {
            res.send(data);
            if (data.status != 1) {
                EmailService.send(data);
            }
        })
        .catch((err) => {
            res.status(400);
            res.send(err);
        });
};

export default { CreateBooking, GetBooking, UpdateBooking, GetBookingById };
