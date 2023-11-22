import './style.css'
import {throttle} from "./js/utils/throttle.js";
import {loadContent} from "./js/content.js";


const throttleResizeHandler = throttle(() => loadApp(), 150);
const mainMediaBreakpoint = 700;

window.addEventListener('load', () => loadApp());
window.addEventListener('resize', () => throttleResizeHandler());

export function loadApp() {
    if (window.innerWidth < mainMediaBreakpoint) {
        loadContent('mobile');
    } else {
        console.log('called');
        loadContent('desktop');
    }
}
