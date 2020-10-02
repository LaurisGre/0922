import { hyperScript } from "./utilityLib/hyperScript";
import { loginWithToken } from "./utilityLib/loginWithToken";

export default class Main {
    constructor() {
        this.login()
    };
    login() {
        this.isLoggedIn = loginWithToken();
    };
    render() {
        if (this.isLoggedIn) {
            return hyperScript('div');
        } else {
            return hyperScript('form');
        };
    };
};

