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
                altText = 'desktop',
                images = {}) {
        this.title = title;
        this.info = info;
        this.placeholderText = placeholderText;
        this.btnText = btnText;
        this.altText = altText;
        this.images = images;
    }
}

const app = document.getElementById('app');
const formTemplate = Handlebars.compile(formHTML);
const successTemplate = Handlebars.compile(successMsg);

window.addEventListener('load', () => {
    loadApp();
});
window.addEventListener('resize', () => {
    loadApp();
});

function loadApp() {
    if (window.innerWidth < 900) {
        loadContent('mobile');
    } else {
        loadContent( 'desktop');
    }
}

function loadContent(design) {
    let info = 'Join 60,000+ product managers receiving monthly<br>updates on:';
    let img = desktopImg;
    if (design === 'mobile') {
        info = 'Join 60,000+ product managers receiving<br>monthly updates on:';
        img = mobileImg;
    }

    let templateData = new TemplateData(
        'Stay Updated!',
        info,
        'email@company.com',
        'Subscribe to monthly newsletter',
        design,
        {iconList, img},
    );
    app.innerHTML = formTemplate(templateData);
    appear();

    const subsForm = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('subscription');
    const invalidEmailMsg = document.querySelector('.invalid-email-msg');

    emailInput.addEventListener('input', () => {
        if (!emailInput.validity.valid) {
            invalidEmailMsg.style.visibility = 'visible';
            emailInput.classList.add('invalid');
        } else if (emailInput.validity.valid) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            invalidEmailMsg.style.visibility = 'hidden';
        }
    });

    subsForm.addEventListener('submit', e => {
        disappear();
        appear();
        const userEmail = document.getElementById('subscription').value;
        app.innerHTML = `<div class="loader"></div>`;

        setTimeout(() => {
            e.preventDefault();
            disappear();
            appear();

            info = `A confirmation email has been sent to<br>
                <strong>${userEmail}</strong>. Please open it and click<br>
                the button inside to confirm your subscription.`;
            if (design === 'mobile') {
                info = `A confirmation email has been sent to<br>
                <strong>${userEmail}</strong>. Please open it and<br> 
                click the button inside to confirm your<br>
                subscription.`;
            }
            templateData.title = 'Thanks for subscribing!';
            templateData.info = info;
            templateData.btnText = 'Dismiss message';
            templateData.images = {iconSuccess};
            app.innerHTML = successTemplate(templateData);

            const returnBtn = document.getElementById('return');
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
