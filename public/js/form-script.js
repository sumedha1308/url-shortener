/* eslint-disable no-return-assign */
/* eslint-disable no-console */
const formElement = document.querySelector('#form');
const urlInput = document.querySelector('#longUrl');
const apiHost = window.location.origin;
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    console.log('formData : ', formData);
    const request = new Request(`${apiHost}/api/urls/`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    fetch(request)
        .then((res) => res.json())
        .then((json) => {
            urlInput.value = json.shortUrl;
        });
});
