## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

* [Desktop image](https://drive.google.com/file/d/1v7efd1-427eQi_Bareeg5kWjBd_ZAbuh/view?usp=sharing)
* [Mobile image](https://drive.google.com/file/d/1HO7CJhYrOYpUynclYYsB9t6AgXYcvwBy/view?usp=sharing)
* [Success Message image](https://drive.google.com/file/d/1DQqZoKlGzssHe4V8Z7I9mMk6w90Spjnp/view?usp=sharing)

### Links

* [Github Source Code](https://github.com/vojtakala-it/newsletter-sign-up)
* [Live Site URL](https://newsletter-sign-up-three-rosy.vercel.app/)

## My process

### Built with

* Semantic HTML5 markup
* CSS
  * custom properties
  * BEM notation
  * modular CSS
  * CSS Grid
  * Flexbox
  * Variable Font
* PostCSS
  * postcss-pxtorem
  * autoprefixer
* Vanilla JS
  * handlebars
* Testing
  * Unit tests with **vitest**
  * e2e tests with **Cypress**

### What I learned

* [BEM notation](https://getbem.com/introduction/) is totally amazing
  * must have if you work with Vanilla CSS
  * makes navigation in your css much easier
  * great for debugging
  * helps when making responsive design with media queries
* Vite
  * Before I used webpack, Vite is easier to configure and feels more fresh and modern
* [PostCSS](https://postcss.org/)
  * amazing stuff which uses JS to transform your CSS, such as:
    * [pxtorem](https://github.com/cuth/postcss-pxtorem)
      * you can write your code in px anywhere, which I find to be more accurate and overall easier to work with. PostCSS will take care of it and during build it'll transform your px to rem.
    * [autoprefixer](https://github.com/postcss/autoprefixer)
      * adds vendor prefixes to your CSS based on browser compatibility, **automatically**
* Cypress
  * I know a little bit of e2e testing with Cypress before. Always good to use and practice.
* Vitest
  * Just like e2e testing
  * being able to develop Test Driven Development style is a valuable skill
  * never hurts to practice writing tests

```js
// a function that helps with JS throttling
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

// unit tests
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
```

### Continued development

#### Vanilla CSS
* still need to practice CSS
  * I'm getting better at Flexbox and CSS Grid but still space to get even better
  * Media Queries and BEM can be used even better
  * Animations and transitions is something I have to practice and use more
  * PostCSS has a lot of potential

#### Less & Sass
* Something that can be easily used with Vanilla CSS
  * I have some xp with Sass, need more
  * I have zero xp with Less, will probably try it on my next challenge

#### CSS Frameworks
* Bootstrap
  * I have some xp from before, I do not use it now because:
    * Vanilla CSS should be mastered or understood thoroughly to truly value, utilize, understand the CSS frameworks
* Tailwind
  * same as bootstrap, will probably do few projects in bootstrap first before I practice Tailwind

#### Vanilla JavaScript
* Similarly to Vanilla CSS, I practice Vanilla JS, because I believe that it will make working with frameworks such as React, Angular, Svelte much easier.

#### React
* Time to give React a go, will probably use it in my next challenge

## Author

* [Twitter](https://twitter.com/KalaVojtec53234)
* [GitHub](https://github.com/vojtakala-it)
* [Frontend Mentor](https://www.frontendmentor.io/profile/vojtakala-it)
* [LinkedIn](https://www.linkedin.com/in/vojt%C4%9Bch-kala-43438b215/)
