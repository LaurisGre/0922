export function nodeMaker(nodeName, attArr = {}, ...children) {
    const node = document.createElement(nodeName);
    for (const key in attArr) {
        node.setAttribute(key, attArr[key])
    };

    children.forEach(child => {
        if (typeof child === 'string') {
            const textNode = document.createTextNode(child);
            node.append(textNode);
        } else {
            node.append(child);
        }
    });

    return node;
};