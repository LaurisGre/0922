import {formMaker} from './formMaker';

export function loginForm() {
    return formMaker(inputArr, buttArr);
};

const inputArr = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'email'
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password'
    }
];

const buttArr = [
    {
        name: 'submit',
        type: 'submit',
        title: 'login'
    }
];