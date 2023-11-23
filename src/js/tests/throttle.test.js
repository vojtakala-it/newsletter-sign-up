import {assert, beforeEach, test} from "vitest";
import {throttle} from "../utils/throttle.js";

let mockFcCalls;
let mockFc;
let throttledFc;
beforeEach(() => {
    mockFcCalls = 0;
    mockFc = () => {
        ++mockFcCalls;
    };
});

test('throttle should execute the function only once within the delay', async () => {
    throttledFc = throttle(mockFc, 500);

    throttledFc();
    throttledFc();
    throttledFc();

    await new Promise(resolve => setTimeout(resolve, 500));
    assert.equal(mockFcCalls, 1);
});

test('throttle should execute the function more times if it spans across multiple delays', async () => {
    throttledFc = throttle(mockFc, 100);
    const startTime = Date.now();

    for (let i = 0; i < 10; i++) {
        throttledFc();
        await new Promise(resolve => setTimeout(resolve, 100));

        if (Date.now() - startTime >= 400) {
            assert.equal(mockFcCalls, 4);
            break;
        }
    }
});

test('throttle should execute the function immediately if not called again within the delay', () => {
    throttledFc = throttle(mockFc, 300);

    throttledFc();

    setTimeout(() => {
        assert.equal(mockFcCalls, 1);
    }, 0);
});
