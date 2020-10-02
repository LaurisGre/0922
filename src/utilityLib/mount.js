// const bucket = document.querySelector('#bucket');

import {createNode} from './createNode';

/**
 * @param {parameters for DOMElement creation} vNode 
 * @param {parent element, mounting on it} parent 
 */

export function mount(vNode, parent) {
    parent.innerHTML = '';
    const node = createNode(vNode);
    parent.append(node);
};