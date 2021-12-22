/* eslint-disable no-return-assign */
window.onload = () => {
    const formElement = document.querySelector('#form');
    const urlInput = document.querySelector('#longUrl');
    const btnShortner = document.querySelector('#btn-shortener');
    const apiHost = window.location.origin;
    const tableDiv = document.querySelector('#table-div');
    const recentUrlsDiv = document.querySelector('#recent-urls');

    const createTable = (jsonObj) => {
        recentUrlsDiv.innerHTML = 'Recent URLs : ';
        const table = document.createElement('table');
        tableDiv.appendChild(table);
        const header = table.createTHead();
        const thead = header.insertRow();
        thead.insertCell().innerHTML = 'Shortened URL';
        thead.insertCell().innerHTML = 'Original Long&nbsp;URL';
        const tbody = table.createTBody();
        const properties = Object.keys(jsonObj).reverse().slice(0, 5);
        properties.forEach((prop) => {
            const tr = tbody.insertRow();
            tr.insertCell().innerHTML = `<a href="${apiHost}/api/urls/${prop}" target="_blank">${apiHost}/api/urls/${prop}</a>`;
            tr.insertCell().innerHTML = `<a href="${jsonObj[prop]}" target="_blank">${jsonObj[prop]}</a>`;
        });
    };

    const removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const request = new Request(`${apiHost}/api/urls/`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        if (btnShortner.textContent === 'Shorten') {
            fetch(request)
                .then((res) => res.json())
                .then((json) => {
                    urlInput.value = json.shortUrl;
                    if (urlInput.value !== '') {
                        btnShortner.textContent = 'Copy';
                        btnShortner.style.backgroundColor = 'lightgreen';
                        btnShortner.style.cursor = 'pointer';
                    }
                });
            fetch(`${apiHost}/api/urls/`)
                .then((res) => res.json())
                .then((json) => {
                    if (tableDiv.children.length === 0) createTable(json);
                    else {
                        removeAllChildNodes(tableDiv);
                        createTable(json);
                    }
                });
        }
    });
    btnShortner.addEventListener('click', () => {
        if (btnShortner.textContent === 'Copy') {
            btnShortner.textContent = 'Copied';
            btnShortner.style.backgroundColor = 'lightyellow';
            btnShortner.style.cursor = 'pointer';
            setTimeout(() => {
                btnShortner.textContent = 'Copy';
                btnShortner.style.backgroundColor = 'lightgreen';
            }, 1000);
            urlInput.select();
            document.execCommand('copy');
        }
    });
    urlInput.addEventListener('change', () => {
        btnShortner.textContent = 'Shorten';
        btnShortner.style.backgroundColor = 'lightblue';
        btnShortner.style.cursor = 'pointer';
    });
};
