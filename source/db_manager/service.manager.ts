import { service, PrismaClient, user } from '@prisma/client';

const prisma = new PrismaClient();

const Create = (serviceData: service) => {
    return new Promise(function (resolve, reject) {
        prisma.service
            .create({
                data: serviceData
            })
            .then((data) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const Get = () => {
    return new Promise(function (resolve, reject) {
        prisma.service
            .findMany()
            .then((data) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const GetById = (id: string) => {
    return new Promise(function (resolve, reject) {
        prisma.service
            .findUnique({
                where: {
                    id: parseInt(id)
                }
            })
            .then((data) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const Update = (serviceData: service) => {
    return new Promise(function (resolve, reject) {
        prisma.service
            .update({
                where: {
                    id: serviceData.id
                },
                data: serviceData
            })
            .then((data) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const Delete = (id: string) => {
    return new Promise(function (resolve, reject) {
        prisma.service
            .delete({
                where: {
                    id: parseInt(id)
                }
            })
            .then((data) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

export default { Create, Get, Update, GetById, Delete };
