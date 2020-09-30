import {loginWithToken} from './login';
import {loginForm} from './componentLib/loginForm';
import {registerForm} from './componentLib/registerForm';
import {mount} from './utilityLib/mount';
import {mainPage} from './componentLib/mainPage';
import {hyperScript} from './utilityLib/hyperScript';
export const bucket = document.querySelector('#bucket');

mount(registerForm(), bucket)
console.log(registerForm());

// const regForm = registerForm();
// mount(regForm);

// if (!loginWithToken()) {
//     mount(loginForm(), bucket);
// } else {
//     mount(mainPage(), bucket)
// };