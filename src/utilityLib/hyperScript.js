export function hyperScript(nodeNameOrComponent, attributes = {}, ...children) {
    return {
        nodeNameOrComponent,
        attributes,
        children
    };
};

//Virtual Node Generator