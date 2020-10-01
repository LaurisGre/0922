import { hyperScript } from './hyperScript';
import {nodeMaker} from './nodeMaker';

export function cardMaker(data) {
    const mainBox = nodeMaker(hyperScript('div', {class: 'grid'}));

    data.forEach((value, index, arr) => {
        const cardBox = nodeMaker(hyperScript('div'));
        mainBox.append(cardBox);
        const cardTitle = nodeMaker(hyperScript('div', {}, value.title));
        cardBox.append(cardTitle);
        const cardBody = nodeMaker(hyperScript('div', {}, value.body));
        cardBox.append(cardBody);

    });

    // console.log(data);

    return mainBox;
};

document.createElement