import {loginWithToken} from './login';
import {loginForm} from './loginForm';

if (!loginWithToken()) {
    const formElement = loginForm()
    document.body.append(formElement);
} else {
    document.body.innerHTML = 'Suppa Secret Service'
}