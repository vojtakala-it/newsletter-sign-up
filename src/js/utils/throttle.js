export function throttle(fc, delay) {
    let lastExecuted = 0;
    let timeoutId;

    return function () {
        const now = Date.now();
        const context = this;

        if (!timeoutId) {
            fc.apply(context, arguments);
            lastExecuted = now;

            timeoutId = setTimeout(() => {
                timeoutId = null;
            }, delay);
        } else {
        }
    };
}

