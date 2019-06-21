/* eslint-disable import/prefer-default-export */
export const TEXT_FIELD = [
    {
        autoComplete: 'title',
        autoFocus: true,
        id: 1,
        label: 'Aid Title',
        name: 'title',
        type: 'text',
    },

    {
        autoComplete: 'description',
        autoFocus: false,
        id: 2,
        label: 'Description',
        name: 'description',
        type: 'text',
    },

    {
        autoComplete: 'text',
        autoFocus: false,
        handler: 'setLastName',
        id: 3,
        label: 'Last Name',
        name: 'lastName',
        type: 'text',
    },

    {
        autoComplete: 'text',
        autoFocus: false,
        handler: 'setPassword',
        id: 4,
        label: 'Password',
        name: 'password',
        type: 'password',
    },

    {
        autoComplete: 'text',
        autoFocus: false,
        handler: 'setphoneNumber',
        id: 5,
        label: 'Phone Number',
        name: 'phoneNumber',
        type: 'number',
    },
];
