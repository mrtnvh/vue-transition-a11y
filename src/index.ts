import Vue from 'vue';

interface IVueTransitiona11yProps {
  reduceMotion: boolean;
}

const MEDIA_QUERY_REDUCE_MOTION = 'screen and (prefers-reduced-motion: reduce)';

export default Vue.component<IVueTransitiona11yProps>('transition-a11y', {
  functional: true,
  props: {
    reduceMotion: {
      default: true,
    },
  },
  render: (h, { data, props: { reduceMotion }, children }) => {
    if (typeof window === 'undefined') return children;
    const { matches = false } = window.matchMedia(MEDIA_QUERY_REDUCE_MOTION);
    return reduceMotion && matches ? children : h('transition', data, children);
  },
});
