import {loginWithToken} from './login';
import {loginForm} from './componentLib/loginForm';
import {registerForm} from './componentLib/registerForm';
import {mount} from './utilityLib/mount';
import {mainPage} from './componentLib/mainPage';
import { hyperScript } from './utilityLib/hyperScript';

console.log(hyperScript('div', {class: 'div'}, 'asd', 'azxc', 'zxcweqweas'));

// const regForm = registerForm();
// mount(regForm);

// if (!loginWithToken()) {
//     mount(loginForm());
// } else {
//     mount(mainPage())
// };