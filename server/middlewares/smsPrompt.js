import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const {
    ACCOUNTS_ID, AUTH_TOKEN, TWILIO_NUMBER,
} = process.env;
const client = new Twilio(ACCOUNTS_ID, AUTH_TOKEN);

const sendSms = (messageBody, receiver) => {
    client.messages
        .create({
            body: messageBody,
            from: TWILIO_NUMBER,
            to: `+234${receiver}`,
        });
};

export default sendSms;
