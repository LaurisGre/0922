export function nodeMaker(nodeName, attArr = {}, ...children) {
    const node = document.createElement(nodeName);
    for (const key in attArr) {
        node.setAttribute(key, attArr[key])
    };

    children.forEach(child => {
        const textNode = document.createTextNode(child);
        node.append(textNode);
    });

    return node;
};