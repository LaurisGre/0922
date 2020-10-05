import hyperScript from './hyperScript';

export function formMaker(inputs = [], buttons = [], fun) {

    const inputNodes = inputs.map(inputAttributes => {
        inputAttributes.change = (e) => {
            inputAttributes.value = e.target.value;
        }
        return hyperScript('input', inputAttributes);
    })

    // const inputs = inputArr.map((input) => {
    //     return hyperScript('input', input);
    // });

    const buttonNodes = buttons.map((button) => {
        return hyperScript('button', button, button.title);
    });

    return hyperScript(
        'form',
        {
            class: 'box',
            method: 'POST',
            submit: fun,
        },
        ...inputNodes,
        ...buttonNodes);
};