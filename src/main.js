import './style.css'
import {throttle} from "./js/utils/throttle.js";
import {loadContent} from "./js/content.js";


const throttleResizeHandler = throttle(() => loadApp(), 150);
const mainMediaBreakpoint = 700;

window.addEventListener('load', loadApp);
window.addEventListener('resize', throttleResizeHandler);

export function loadApp() {
    console.log('called');
    if (window.innerWidth < mainMediaBreakpoint) {
        loadContent('mobile');
    } else {
        loadContent('desktop');
    }

    const inputEl = document.querySelector('.form__input');
    if (inputEl) {
        inputEl.addEventListener('focus', inputClicked);
    }
}

function inputClicked() {
    const subsFormEl = document.querySelector('#subscriptionForm');
    window.removeEventListener('resize', throttleResizeHandler);
    subsFormEl.classList.add('extra-padding-bottom');

    setTimeout(() => {
        window.addEventListener('resize', throttleResizeHandler);
    }, 10000);
}

