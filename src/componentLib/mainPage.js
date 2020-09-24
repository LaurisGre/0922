import {nodeMaker} from '../utilityLib/nodeMaker';
import {user} from '../login';

export function mainPage() {
    const main = nodeMaker('div',{},'Cia yra divas');

    console.log(user);

    fetch('http://rest.stecenka.lt/api/sveikinimai', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': user.token
        }
    })
        .then (response => response.json())
        .then (sveikinimai => console.log(sveikinimai))

    return main;
}