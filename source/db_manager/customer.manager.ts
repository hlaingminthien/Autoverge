import { customer, PrismaClient, user } from '@prisma/client';

const prisma = new PrismaClient();

const Create = (customerData: customer) => {
    return new Promise(function (resolve, reject) {
        prisma.customer
            .create({
                data: customerData
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
        prisma.customer
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
        prisma.customer
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

const Update = (customerData: customer) => {
    return new Promise(function (resolve, reject) {
        prisma.customer
            .update({
                where: {
                    id: customerData.id
                },
                data: customerData
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

export default { Create, Get, Update, GetById };
