# vue-transition-a11y

Vue transition component with a11y considerations.

- Problem
- Solution
- API
- Contributing

## Problem

When using the Vue `transitions` component with [CSS transitions](https://vuejs.org/v2/guide/transitions.html#CSS-Transitions) or [CSS Animations](https://vuejs.org/v2/guide/transitions.html#CSS-Animations), it's pretty easy to disable these for users who prefer this.

```html
<transition name="slide-fade">
  <!-- ... -->
</transition>
```

Transitions

```css
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none;
  }
}
```

Animations

```css
.slide-fade-enter-active,
.slide-fade-leave-active {
  animation: bounce-in 0.5s;
}

@media (prefers-reduced-motion: reduce) {
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    animation: none;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

Globally

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

But when using [JavaScript Hooks](JavaScript-Hooks), things get a little more complicated.

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

```js
// ...
methods: {
  beforeEnter(el) {
    // ...
  },
  enter(el, done) {
    // ...
    done()
  },
  afterEnter(el) {
    // ...
  },
  enterCancelled(el) {
    // ...
  },
  beforeLeave(el) {
    // ...
  },
  leave(el, done) {
    // ...
    done()
  },
  afterLeave(el) {
    // ...
  },
  leaveCancelled(el) {
    // ...
  }
}
```

Where in all of these functions are you going to disable your complex animations?

Using the `window.matchMedia` functionality, you could check if the user's preferences.

```js
const prefersReducedMotion = window.matchMedia(
  'screen and (prefers-reduced-motion: reduce)',
).matches;

// Stop every animation method if prefersReducedMotion === false
```

A bit over the top, don't you think?

## Solution

To tackle this problem and enable Vue developers to make complex, re-usable and **accessible** transitions and animations with the transition component, I've created this component.

What is does is very simple. If the user **prefers reduced motion, don't render the transition component**. If not, render it.

This way, JavaScript Hooks aren't called when unnecessary

Easy.

## API

The `vue-transition-a11y` components API extends the standard [Vue `transition` API](https://vuejs.org/v2/api/#transition).

### Props

| Prop         | Default value | Description                                                          |
| ------------ | ------------- | -------------------------------------------------------------------- |
| reduceMotion | `true`        | Take the `prefers-reduced-motion: reduce` media query in to account. |

### Usage

```html
<div class="outer">
  <transition-a11y>
    <div class="inner">
      <!-- ... -->
    </div>
  </transition-a11y>
</div>
```

## License

[MIT](https://github.com/vanhoofmaarten/vue-transition-a11y/blob/master/LICENSE)

Copyright (c) 2020 Maarten Van Hoof
