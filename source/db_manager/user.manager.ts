import { PrismaClient, user } from '@prisma/client';

const prisma = new PrismaClient();

const Create = (userData: user) => {
    return new Promise(function (resolve, reject) {
        prisma.user
            .create({
                data: userData
            })
            .then((data: any) => {
                prisma.$disconnect();
                resolve(data);
            })
            .catch((e: any) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const Get = () => {
    return new Promise(function (resolve, reject) {
        prisma.user
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
        prisma.user
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

const Update = (userData: user) => {
    return new Promise(function (resolve, reject) {
        prisma.user
            .update({
                where: {
                    id: userData.id
                },
                data: userData
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

const Login = (userData: user) => {
    return new Promise(function (resolve, reject) {
        prisma.user
            .findFirst({
                where: {
                    userName: userData.userName
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

export default { Create, Get, Update, GetById, Login };
