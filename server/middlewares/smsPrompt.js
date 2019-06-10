import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const {
    ACCOUNTSID, AUTHTOKEN, TWILIONUMBER,
} = process.env;
const client = new Twilio(ACCOUNTSID, AUTHTOKEN);

const sendSms = async (messageBody, receiver) => {
    client.messages
        .create({
            body: messageBody,
            from: TWILIONUMBER,
            to: receiver,
        });
};

export default sendSms;
