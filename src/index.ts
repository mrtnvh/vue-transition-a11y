import Vue from 'vue';

interface IVueTransitionAy11Props {
  reduceMotion: boolean;
}

export const MEDIA_QUERY_REDUCE_MOTION =
  'screen and (prefers-reduced-motion: reduce)';

export default Vue.component<IVueTransitionAy11Props>('transition-a11y', {
  functional: true,
  props: {
    reduceMotion: {
      default: true,
    },
  },
  render: (h, { data, props: { reduceMotion }, children }) => {
    const matchMedia = window && window.matchMedia(MEDIA_QUERY_REDUCE_MOTION);
    return reduceMotion && matchMedia.matches
      ? children
      : h('transition', data, children);
  },
});
