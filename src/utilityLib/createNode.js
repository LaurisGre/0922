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
            element.addEventListener(key, attributes[key]);
        } else {
            element.setAttribute(key, attributes[key]);
        };
    };

    children.forEach(child => {
        if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            element.append(textNode);
        } else {
            element.append(createNode(child));
        };
    });

    return element;
};

function renderComponent(classComponent, attributes){
    const component = new classComponent(attributes);
    const virtualNode = component.render();
    component.element = createNode(virtualNode);
    // console.log(component);
    return component.element;

    // return createNode(new classComponent(attributes).render())
};