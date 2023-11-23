import './style.css'
import {throttle} from "./js/utils/throttle.js";
import {loadContent} from "./js/content.js";

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('load', loadApp);
    window.addEventListener('resize', throttleResizeHandler);
});

const throttleResizeHandler = throttle(loadApp, 150);
const mainMediaBreakpoint = 700;
const mobileBreakpoint = 425;

export function loadApp() {
    if (window.innerWidth <= mainMediaBreakpoint) {
        loadContent('mobile');
    } else {
        loadContent('desktop');
    }

    if (window.innerWidth <= mobileBreakpoint) {
        const inputEl = document.querySelector('.form__input');
        if (inputEl) {
            inputEl.addEventListener('focus', inputFocused);

            const returnBtnEl = document.getElementById('return');
            if (returnBtnEl) {
                window.addEventListener('click', returnBtnClicked);
            }
        }
    }
}

function inputFocused() {
    window.removeEventListener('resize', throttleResizeHandler);
}

function returnBtnClicked() {
    window.addEventListener('resize', throttleResizeHandler);
}

