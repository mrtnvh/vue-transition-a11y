import Vue from 'vue';

export const TEXT = 'This is a test';

export const HTML = `<span>${TEXT}</span>`;

export default Vue.component('Child', {
  props: {
    childProp: {
      default: 'This is a child prop',
    },
  },
  template: HTML,
});
