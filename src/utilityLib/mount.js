// const bucket = document.querySelector('#bucket');

import {nodeMaker} from '../utilityLib/nodeMaker';

/**
 * @param {parameters for DOMElement creation} vNode 
 * @param {parent element, mounting on it} parent 
 */

export function mount(vNode, parent) {
    parent.innerHTML = '';

    const node = nodeMaker(vNode);
    parent.append(node);
};