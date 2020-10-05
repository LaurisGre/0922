import { bucket } from "../app";
import { createNode } from "../utilityLib/createNode";
import h from "../utilityLib/hyperScript";

export default class Navigation {
    constructor() {
        this.state = {
            navigationLinks: [
                'Home',
                'Login',
                'Register'
            ],
            isActive: false,
        };
        this.activate = this.activate.bind(this);
    };

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };
        this.updateComponent()
    };

    activate(e) {
        this.setState({isActive: !this.state.isActive});
    };

    updateComponent() {
        const vNode = this.render();
        const element = createNode(vNode);
        this.element.replaceWith(element);
        this.element = element;
        // console.log(this.element);
        // console.log(element);
    };

    render() {
        const link = this.state.navigationLinks.map(link => {
            return h('li', {}, h('a', {class: 'text'},link)); 
        });
        
        const ul = h('ul', {}, ...link);
        const burger = h(
            'div',
            {class: 'burg', click: () => this.activate()},
            h('div', {class: 'bar1'}),
            h('div', {class: 'bar2'}),
            h('div', {class: 'bar3'}),
        );
        
        return h('nav', {}, this.state.isActive ? ul : '', burger)

        // return h('nav', {}, h('ul', {}, ...this.state.navigationLinks.map((value) => h('li', {}, h('a', {class: 'text'}, value, h('span',{class: 'line'})))),
        //  h('div', {class: 'burg', click: () => this.activate()}, h('div',{class: 'bar1'}),h('div', {class: 'bar2'}),h('div', {class: 'bar3'})))); 
    };
};