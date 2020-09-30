import {formMaker} from '../utilityLib/formMaker';
import {loginForm} from './loginForm'
import {mount} from '../utilityLib/mount';

export function registerForm() {
    return formMaker(inputArr, buttArr, fn);
};

function fn(e) {
    e.preventDefault();

    const credentials = {};

    inputArr.forEach((val) => {
        credentials[val.name] = val.value
    });

    fetch('http://rest.stecenka.lt/register', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(credentials)
        })
        .then(response => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            if (data === 'success') {
                e.target.remove();
                mount(loginForm())
            }
        })
};

const inputArr = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'name'
    },
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
        title: 'register',
    }
];