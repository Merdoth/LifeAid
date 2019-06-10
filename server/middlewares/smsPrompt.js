import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const {
    ACCOUNTSID, AUTHTOKEN, TWILIONUMBER,
} = process.env;
const client = new Twilio(ACCOUNTSID, AUTHTOKEN);

const sendSms = async (messageBody, receiver) => {
    await client.messages
        .create({
            body: messageBody,
            from: TWILIONUMBER,
            to: `+234${receiver}`,
        });
};

export default sendSms;
