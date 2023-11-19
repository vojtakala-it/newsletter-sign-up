import './style.css'
import formHTML from './html/form.html?raw';
import successMsg from './html/success-mgs.html?raw';

const app = document.querySelector('#app');

loadApp();

function loadApp() {
    let showForm = true;

    app.innerHTML = formHTML;
    const subsForm = document.querySelector('#subscriptionForm');

    subsForm.addEventListener('submit', e => {
        e.preventDefault();
        app.innerHTML = successMsg;
        showForm = false;

        const returnBtn = document.querySelector('#return');

        returnBtn.addEventListener('click', e => {
            loadApp();
        });
    });
}
