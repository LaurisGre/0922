import {nodeMaker} from './nodeMaker';

export function formMaker(inputArr, buttArr) {
    const $form = document.createElement('form');
    $form.classList.add('box');
    $form.innerHTML = 'Please login';

    inputArr.forEach((input) => {
        const inputElement = nodeMaker('input', input);
        $form.append(inputElement);
    });

    buttArr.forEach((buttonAttributes) => {
        const buttonElement  = nodeMaker('button', buttonAttributes, buttonAttributes.title);
        $form.append(buttonElement);
    });

    return $form;
};