import desktopImg from "../assets/images/illustration-sign-up-desktop.svg";
import mobileImg from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import iconSuccess from "../assets/images/icon-success.svg";

export class TemplateData {
    constructor(title = '',
                info = '',
                placeholderText = 'email@company.com',
                btnText = '',
                altText = '',
                images = {}) {
        this.title = title;
        this.info = info;
        this.placeholderText = placeholderText;
        this.btnText = btnText;
        this.altText = altText;
        this.images = images;
    }
}

export let templateValues = {
    title: {
        form: 'Stay updated!',
        successMsg: 'Thanks for subscribing!',
    },
    info: {
        form: {
            desktop: 'Join 60,000+ product managers receiving monthly<br>updates on:',
            mobile: 'Join 60,000+ product managers receiving<br>monthly updates on:',
        },
        successMsg: {
            desktop: 'A confirmation email has been sent to<br>' +
                '<strong>{{userEmail}}</strong>. Please open it and click<br>' +
                'the button inside to confirm your subscription.',
            mobile: 'A confirmation email has been sent to' +
                ' <strong>{{userEmail}}</strong>. Please open it and' +
                ' click the button inside to confirm your' +
                ' subscription.',
        }
    },
    btnText: {
        form: 'Subscribe to monthly newsletter',
        successMsg: 'Dismiss message',
    },
    img: {
        form: {
            desktop: desktopImg,
            mobile: mobileImg,
            iconList: iconList,
        },
        successMsg: {iconSuccess},
    },
}
