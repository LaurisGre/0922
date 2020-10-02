import {loginWithToken} from './utilityLib/loginWithToken';
import {loginForm} from './componentLib/loginForm';
import {registerForm} from './componentLib/registerForm';
import {mount} from './utilityLib/mount';
import {mainPage} from './componentLib/mainPage';
import {hyperScript} from './utilityLib/hyperScript';
import Main from './Main';
import { createNode } from './utilityLib/createNode';

export const bucket = document.querySelector('#bucket');

mount(hyperScript(Main), bucket)


// mainOnbj.render();
// console.log(mainOnbj.render());

// mount(registerForm(), bucket)
// // console.log(registerForm());

// const regForm = registerForm();
// mount(regForm, bucket);

// if (!loginWithToken()) {
//     mount(loginForm(), bucket);
// } else {
//     mount(mainPage(), bucket)
// };