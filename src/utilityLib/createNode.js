/**
 * @param {object with DOMParameters, three params: name, attributes, children} vNode 
 */

export function createNode({nodeNameOrComponent, attributes, children}) {
    if (typeof nodeNameOrComponent === 'function') {
        return renderComponent(nodeNameOrComponent, attributes)
    }

    const element = document.createElement(nodeNameOrComponent);

    for (const key in attributes) {
        if (typeof attributes[key] === 'function'){
            element.addEventListener('key', attributes[key]);
        } else {
            element.setAttribute(key, attributes[key]);
        };
    };

    children.forEach(child => {
        if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            element.append(textNode);
        } else {
            element.append(nodeMaker(child));
        };
    });

    return element;
};

function renderComponent(classComponent, attributes){
    // const a = new classComponent(attributes)
    // return createNode(a.render())
    return createNode(new classComponent(attributes).render())
};