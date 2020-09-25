import {formMaker} from '../utilityLib/formMaker';
import {nodeMaker} from './nodeMaker';
import {user} from '../login';

export function postMaker() {
    return formMaker(inputArr, buttArr, fn);
};

function fn(e) {
    e.preventDefault();

    const credentials = {};

    inputArr.forEach((val) => {
        credentials[val.name] = val.value
    });

    console.log(credentials);
    fetch('http://rest.stecenka.lt/api/sveikinimai', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': user.token
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
        .then((data) => {
            if (data === 'success') {
                e.target.remove();
                mount(loginForm())
            }
        }
        )
};

const inputArr = [
    {
        name: 'title',
        type: 'text',
        placeholder: 'title'
    },
    {
        name: 'body',
        type: 'textarea',
        placeholder: 'body'
    }
];

const buttArr = [
    {
        name: 'submit',
        type: 'submit',
        title: 'post'
    }
];