import {formMaker} from '../utilityLib/formMaker';
import {mainPage} from './mainPage';
import {mount} from '../utilityLib/mount';
import {user} from '../utilityLib/loginWithToken';

export function loginForm() {
    return formMaker(inputArr, buttArr, fn);
};

function fn(e) {
    e.preventDefault();

    const credentials = {};

    inputArr.forEach((val) => {
        credentials[val.name] = val.value
    });

    fetch('http://rest.stecenka.lt/login', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(credentials)
        }
    )
        .then(response => {
            if (response.ok){
                return response.json();
            }
        })
        .then(token => {
            if (token) {
                localStorage.setItem('token', token);
                user.token = 'Bearer' + token;
                mount(mainPage())
            }
        }
        )
};

// const credentials = {
//     name: 'Bilas',
//     email: 'Bilas@bilas.eu',
//     password: 'bilobilas'
// };

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