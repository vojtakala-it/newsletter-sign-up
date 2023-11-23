export function throttle(fc, delay) {
    let timeoutId;

    return function () {
        const context = this;

        if (!timeoutId) {
            fc.apply(context, arguments);

            timeoutId = setTimeout(() => {
                timeoutId = null;
            }, delay);
        }
    };
}
