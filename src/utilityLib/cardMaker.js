import {nodeMaker} from './nodeMaker';

export function cardMaker(data) {
    const mainBox = nodeMaker('div', {class: 'grid'});

    data.forEach((value, index, arr) => {
        const cardBox = nodeMaker('div');
        mainBox.append(cardBox);
        const cardTitle = nodeMaker('div', {}, value.title);
        cardBox.append(cardTitle);
        const cardBody = nodeMaker('div', {}, value.body);
        cardBox.append(cardBody);

    });

    console.log(data);

    return mainBox;
};