/* eslint-disable sort-keys */
const sender = 'lifeaidd@gmail.com';
const title = 'Emergency report';
const smsBody = 'Your report has been recieved and Help is on it way';
const receiver = [
    {
        name: 'Faith Omojola',
        address: 'faithomojola@yahoo.com',

    },
    {
        name: 'Miracle Ayodele',
        address: 'miracleaayodele@gmail.com',

    },
    {
        name: 'Enye Admin',
        address: 'admin@enye.tech',

    },
    {
        name: 'Meya Samuel',
        address: 'ucheya97@gmail.com',

    },
    {
        name: 'Okemmadu Eric',
        address: 'okemmadueric@gmail.com',

    },
];

module.exports = {
    receiver,
    sender,
    smsBody,
    title,
};
