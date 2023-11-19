import './style.css'
import Handlebars from 'handlebars';
import formHTML from './html/form.html?raw';
import successMsg from './html/success-mgs.html?raw';
import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';
import desktopImg from './assets/images/illustration-sign-up-desktop.svg';
import mobileImg from './assets/images/illustration-sign-up-mobile.svg';

const app = document.querySelector('#app');

const formTemplate = Handlebars.compile(formHTML);
const title = 'Stay Updated!';
const info = 'Join 60,000+ product managers receiving monthly\nupdates on:';
const placeholderText = 'email@company.com';
const btnText = 'Subscribe to monthly newsletter';

const formData = {
    title,
    info,
    placeholderText,
    btnText,
    images: {
        iconList,
        desktopImg,
    }
}

loadApp();

function loadApp() {
    let showForm = true;

    app.innerHTML = formTemplate(formData);
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
