import { hyperScript } from "./utilityLib/hyperScript";
import { loginWithToken } from "./utilityLib/loginWithToken";

export default class Main {
    login() {
        this.isLoggedIn = loginWithToken();
    };
    constructor() {
        this.login()
    };
    render() {
        if (this.isLoggedIn) {
            return hyperScript('div');
        } else {
            return hyperScript('form');
        }
       
    };
};

