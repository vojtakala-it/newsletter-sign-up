import formHTML from "../html/form.html?raw";
import successMsgHTML from "../html/success-mgs.html?raw";

import {TemplateData, templateValues} from "./templateData.js";
import Handlebars from "handlebars";
import {loadApp} from "../main.js";


const app = document.getElementById('app');
const formTemplate = Handlebars.compile(formHTML);
const successTemplate = Handlebars.compile(successMsgHTML);
const templateTimeout = 3000;
const appearTimeout = 300;
let formIsValid = false;
let templateData = new TemplateData();
let userEmail = '';

function formValidation() {
    const emailInputEl = document.getElementById('subscription');
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const invalidEmailMsg = document.querySelector('.form__input__warning');

    emailInputEl.addEventListener('input', () => {
        const isValid = emailPattern.test(emailInputEl.value);

        if (isValid) {
            emailInputEl.classList.add('form__input--valid');
            emailInputEl.classList.remove('form__input--invalid');
            invalidEmailMsg.style.visibility = 'hidden';
            formIsValid = true;
        } else if (!isValid) {
            emailInputEl.classList.add('form__input--invalid');
            emailInputEl.classList.remove('form__input--valid');
            invalidEmailMsg.style.visibility = 'visible';
            formIsValid = false;
        }
    });
}

function onFormSubmission(media) {
    const subsForm = document.getElementById('subscriptionForm');

    subsForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!formIsValid) {
            return;
        }
        userEmail = document.getElementById('subscription').value;
        app.innerHTML = `<div class="loader"></div>`;

        prepareMsgSuccessTemplate(media);
    });
}

function prepareMsgSuccessTemplate(media) {
    const infoMsgTemplate = templateValues.info.successMsg[media];
    const compiledInfoMsg = Handlebars.compile(infoMsgTemplate);
    const info = compiledInfoMsg({ userEmail });

    setTimeout(() => {
        contentDisappear();
        contentAppear()

        templateData.title = templateValues.title['successMsg'];
        templateData.info = info;
        templateData.btnText = templateValues.btnText['successMsg'];
        templateData.images = templateValues.img.successMsg;
        app.innerHTML = successTemplate(templateData);

        const returnBtn = document.getElementById('return');
        returnBtn.addEventListener('click', () => {
            contentDisappear();
            loadApp();
        });
        }, templateTimeout);
}

export function loadContent(media) {
    templateData.title = templateValues.title['form'];
    templateData.info = templateValues.info.form[media];
    templateData.btnText = templateValues.btnText['form'];
    templateData.altText = media;
    templateData.images = { iconList: templateValues.img.form["iconList"] ,img: templateValues.img.form[media] };
    app.innerHTML = formTemplate(templateData);


    if (window.innerWidth <= 320) {
        const formGridEl = document.querySelector('.grid--template-areas-a-b');
        formGridEl.classList.remove('pxy-m');
    }

    contentAppear();
    formValidation(media);
    onFormSubmission(media);
}

function contentAppear() {
    setTimeout(() => {
        app.classList.add('appear');
    }, appearTimeout);
}

function contentDisappear() {
    app.classList.remove('appear');
}
