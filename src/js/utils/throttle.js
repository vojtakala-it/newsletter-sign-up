export function throttle(fc, delay) {
    let lastExecuted = 0;

    return function () {
        const now = Date.now();

        if (now - lastExecuted >= delay) {
            fc.apply(this, arguments);
            lastExecuted = now;
        }
    };
}

