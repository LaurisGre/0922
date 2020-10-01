import {user} from '../utilityLib/loginWithToken';
import {cardMaker} from '../utilityLib/cardMaker';
import {mount} from '../utilityLib/mount';
import {postMaker} from '../utilityLib/postMaker';
import {bucket} from '../app';

export function mainPage() {
    const navBar = document.createElement('nav');
    document.body.append(navBar);
    const postButt = document.createElement('button');
    postButt.addEventListener('click', () => {
        mount(postMaker(), bucket)
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
        .then (sveikinimai => bucket.append(cardMaker(sveikinimai)))
};

// .then (sveikinimai => mount(cardMaker(sveikinimai), bucket))