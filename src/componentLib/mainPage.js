import {nodeMaker} from '../utilityLib/nodeMaker';
import {user} from '../login';
import {cardMaker} from '../utilityLib/cardMaker';
import {mount} from '../utilityLib/mount';
import {postMaker} from '../utilityLib/postMaker';

export function mainPage() {
    const navBar = nodeMaker('nav');
    document.body.append(navBar);
    const postButt = nodeMaker('button');
    postButt.addEventListener('click', () => {
        mount(postMaker())
    })
    navBar.append(postButt);

    fetch('http://rest.stecenka.lt/api/sveikinimai', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': user.token
        }
    }
    )
        .then (response => response.json())
        .then (sveikinimai => mount(cardMaker(sveikinimai)))
};