var nodemailer = require('nodemailer');

const send = (data: any) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hlaingmin1235145@gmail.com',
            pass: 'yxvahwvjmicbekbc'
        }
    });

    const createSubject = (status: string) => {
        if (status === 'complete') return 'Booking';
        if (status === 'paid') {
            return 'Thank You For Choosing Our Service!';
        }
    };

    const createText = (status: string) => {
        if (status === 'complete') return 'The reservation has been successfully ' + 'booked and accepted by the Auto Verge Service.';
        if (status === 'paid') return 'The reservation has been successfully booked ' + 'and accepted by the Auto Verge Service.';
    };

    var mailOptions = {
        from: 'hlaingmin1235145@gmail.com',
        to: data.email,
        subject: createSubject(data.status),
        text: createText(data.status)
    };

    console.log('mailOptions is=>', mailOptions);
    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export default { send };
