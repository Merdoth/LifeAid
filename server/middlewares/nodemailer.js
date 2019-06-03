import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {
    HOST, MAIL_PORT, USER, PASS,
} = process.env;

const sendMail = async (from, subject, to, html, text) => {
    const transporter = await nodemailer.createTransport({
        auth: {
            pass: PASS,
            user: USER,
        },
        host: HOST,
        port: MAIL_PORT,
        secure: false,
    });

    await transporter.sendMail({
        from, // sender address
        html, // html body
        subject, // Subject line
        text, // plain text body
        to, // list of receivers
    });
};

export default sendMail;
