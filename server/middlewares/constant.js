const sender = 'lifeaidd@gmail.com';
const title = 'Emergency report';
const smsBody = 'Your report has been recieved and Help is on it way';
const receiver = [
    {
        address: 'faithomojola@yahoo.com',
        name: 'Faith Omojola',

    },
    {
        address: 'miracleaayodele@gmail.com',
        name: 'Miracle Ayodele',

    },
    {
        address: 'admin@enye.tech',
        name: 'Enye Admin',

    },
    {
        address: 'ucheya97@gmail.com',
        name: 'Meya Samuel',

    },
    {
        address: 'okemmadueric@gmail.com',
        name: 'Okemmadu Eric',

    },
];

module.exports = {
    receiver,
    sender,
    smsBody,
    title,
};
