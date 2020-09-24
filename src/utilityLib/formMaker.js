import {nodeMaker} from './nodeMaker';

export function formMaker(inputArr, buttArr, fun) {
    const $form = document.createElement('form');
    $form.classList.add('box');

    inputArr.forEach((input) => {
        const inputElement = nodeMaker('input', input);

        inputElement.addEventListener('keyup', () => {
            input.value = inputElement.value;
        })
        $form.append(inputElement);
    });

    buttArr.forEach((buttonAttributes) => {
        const buttonElement  = nodeMaker('button', buttonAttributes, buttonAttributes.title);
        $form.append(buttonElement);
    });

    $form.addEventListener('submit', fun);

    return $form;
};