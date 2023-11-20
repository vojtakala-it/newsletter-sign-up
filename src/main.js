import './style.css'
import Handlebars from 'handlebars';
import formHTML from './html/form.html?raw';
import successMsg from './html/success-mgs.html?raw';
import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';
import desktopImg from './assets/images/illustration-sign-up-desktop.svg';
import mobileImg from './assets/images/illustration-sign-up-mobile.svg';

class TemplateData {
    constructor(title,
                info,
                placeholderText = '',
                btnText,
                images = {}) {
        this.title = title;
        this.info = info;
        this.placeholderText = placeholderText;
        this.btnText = btnText;
        this.images = images;
    }
}

const app = document.querySelector('#app');
const formTemplate = Handlebars.compile(formHTML);
const successTemplate = Handlebars.compile(successMsg);

loadApp();

function loadApp() {
    let templateData = new TemplateData(
        'Stay Updated!',
        'Join 60,000+ product managers receiving monthly<br>updates on:',
        'email@company.com',
        'Subscribe to monthly newsletter',
        {iconList, desktopImg},
    );
    app.innerHTML = formTemplate(templateData);
    appear();

    const subsForm = document.querySelector('#subscriptionForm');
    subsForm.addEventListener('submit', e => {
        disappear();
        appear();
        const userEmail = document.getElementById('subscription').value;
        app.innerHTML = `<div class="loader"></div>`;

        setTimeout(() => {
            e.preventDefault();
            disappear();
            appear();
            templateData.title = 'Thanks for subscribing!';
            templateData.info = `A confirmation email has been sent to<br>
                <strong>${userEmail}</strong>. Please open it and click<br>
                the button inside to confirm your subscription.`;
            templateData.btnText = 'Dismiss message';
            templateData.images = {iconSuccess};
            app.innerHTML = successTemplate(templateData);

            const returnBtn = document.querySelector('#return');
            returnBtn.addEventListener('click', e => {
                disappear();
                loadApp();
            });
        },3000);
    });
}

function appear() {
    setTimeout(() => {
        app.classList.add('appear');
    }, 300);
}

function disappear() {
    app.classList.remove('appear');
}
