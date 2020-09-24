import {loginWithToken} from './login';
import {loginForm} from './componentLib/loginForm';
import {registerForm} from './componentLib/registerForm';
import {mount} from './utilityLib/mount';
import {mainPage} from './componentLib/mainPage';


const regForm = registerForm();
mount(regForm);

if (!loginWithToken()) {
    mount(loginForm());
} else {
    mount(mainPage())
}