/**
 * @param {object with DOMParameters, three params: name, attributes, children} vNode 
 */

export function nodeMaker(vNode) {
    const element = document.createElement(vNode.nodeName);

    for (const key in vNode.attributes) {
        if (typeof vNode.attributes[key] === 'function'){
            element.addEventListener('key', vNode.attributes[key]);
        } else {
            element.setAttribute(key, vNode.attributes[key]);
        }
    };

    vNode.children.forEach(child => {
        if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            element.append(textNode);
        } else {
            element.append(nodeMaker(child));
        }
    });

    return element;
};