/* eslint-disable no-return-assign */
/* eslint-disable no-console */
const formElement = document.querySelector('#form');
// const urlInput = document.querySelector('#longUrl');
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    console.log('formData : ', formData);
    const request = new Request('http://localhost:3000/api/urls/', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(formData),
    });
    fetch(request)
        .then((res) => res.json())
        .then((json) => console.log('json in form', json));
});
