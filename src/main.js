import './style.css'
import {throttle} from "./js/utils/throttle.js";
import {loadContent} from "./js/content.js";


const throttleResizeHandler = throttle(() => loadApp(), 150);
const mainMediaBreakpoint = 700;

window.addEventListener('load', () => loadApp());
window.addEventListener('resize', () => throttleResizeHandler());

const inputEl = document.querySelector('.form__input');
if (inputEl) {
    inputEl.addEventListener('focus', () => inputClicked());
}

function inputClicked() {
    window.removeEventListener('resize', () => throttleResizeHandler());

    setTimeout(() => {
        window.addEventListener('resize', () => throttleResizeHandler());
    }, 500);
}

export function loadApp() {
    if (window.innerWidth < mainMediaBreakpoint) {
        loadContent('mobile');
    } else {
        loadContent('desktop');
    }
}
