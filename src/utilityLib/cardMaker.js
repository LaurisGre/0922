import hyperScript from './hyperScript';
import {createNode} from './createNode';

export function cardMaker(data) {
    const mainBox = nodeMaker(hyperScript('div', {class: 'grid'}));

    data.forEach((value, index, arr) => {
        const cardBox = createNode(hyperScript('div'));
        mainBox.append(cardBox);
        const cardTitle = createNode(hyperScript('div', {}, value.title));
        cardBox.append(cardTitle);
        const cardBody = createNode(hyperScript('div', {}, value.body));
        cardBox.append(cardBody);

    });

    // console.log(data);

    return mainBox;
};

document.createElement