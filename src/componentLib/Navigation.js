import { hyperScript } from "../utilityLib/hyperScript"

export default class Navigation {
    constructor() {
        this.navigationLinks = [
            'Home',
            'Login',
            'Register'
        ]
    }
    render() {
        return hyperScript('nav', {}, hyperScript('ul', {}, ...this.navigationLinks.map((value) => 
        hyperScript('li', {}, hyperScript('a', {}, value))), hyperScript('div', {class: 'burg'}, hyperScript('div',{class: 'bar1'}),hyperScript('div', {class: 'bar2'}),hyperScript('div', {class: 'bar3'})))); 
    }
};
