const bucket = document.querySelector('#bucket');

export function mount(element) {
    bucket.innerHTML = '';
    bucket.append(element)
}