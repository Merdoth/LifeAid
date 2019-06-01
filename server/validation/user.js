import Validator from 'validator';
import isEmpty from './is-empty';

const validateUserQueryText = data => {
    const errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (Validator.isEmpty(data.email)) {
        errors.email = 'user email is required';
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'user first name  is required';
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'user last name is required';
    }
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.lastName = 'user phone number is required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.lastName = 'user password is required';
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
};

module.exports = validateUserQueryText;
