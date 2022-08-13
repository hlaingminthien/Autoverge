import { booking, Prisma, PrismaClient, user } from '@prisma/client';

const prisma = new PrismaClient();

const Create = (bookingData: booking) => {
    return new Promise(function (resolve, reject) {
        prisma.booking
            .create({
                data: bookingData
            })
            .then((data: any) => {
                prisma.$disconnect();
                prisma
                    .$queryRaw(
                        Prisma.sql`SELECT *, bs.name status, c.email FROM booking b LEFT JOIN 
                                    customer c ON b.customerId = c.id 
                                    LEFT JOIN booking_status bs ON bs.id = b.status WHERE b.id = ${data.id};`
                    )
                    .then((res: any) => {
                        resolve(res[0]);
                    })
                    .catch((err) => resolve(data));
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

const Get = () => {
    return new Promise(function (resolve, reject) {
        prisma
            .$queryRaw(
                Prisma.sql`SELECT b.id, b.createdDate, c.name customer, c.email, b.carNo, b.service,
                bs.name status, b.durationDay, ds.name durationType, note
                FROM booking b LEFT JOIN customer c ON b.customerId = c.id LEFT JOIN
                booking_status bs ON b.status = bs.id LEFT JOIN 
                duration_status ds ON ds.id = b.durationType LEFT JOIN
                service s ON s.id = b.service;`
            )
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
        prisma.booking
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

const Update = (bookingData: booking) => {
    return new Promise(function (resolve, reject) {
        prisma.booking
            .update({
                where: {
                    id: bookingData.id
                },
                data: bookingData
            })
            .then((data: any) => {
                prisma.$disconnect();
                prisma
                    .$queryRaw(
                        Prisma.sql`SELECT *, bs.name status, c.email FROM booking b LEFT JOIN 
                                    customer c ON b.customerId = c.id 
                                    LEFT JOIN booking_status bs ON bs.id = b.status WHERE b.id = ${data.id};`
                    )
                    .then((res: any) => {
                        resolve(res[0]);
                    })
                    .catch((err) => resolve(data));
            })
            .catch((e) => {
                prisma.$disconnect();
                reject(e);
            });
    });
};

export default { Create, Get, Update, GetById };
