import {hyperScript} from './hyperScript';

export function formMaker(inputArr, buttArr, fun) {

    const inputs = inputArr.map((input) => {
        return hyperScript('input', input);
    });

    const buttons = buttArr.map((button) => {
        return hyperScript('button', button, button.title);
    });

    return hyperScript(
        'form',
        {
            class: 'box',
            method: 'POST',
            submit: fun,
        },
        ...inputs,
        ...buttons);
};