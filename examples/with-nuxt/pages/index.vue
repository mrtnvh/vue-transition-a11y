<template>
  <div class="container">
    <TransitionA11y appear name="fade">
      <div v-if="loaded">
        <logo />
        <h1 class="title">with-nuxt</h1>
        <h2 class="subtitle">Example project with Nuxt.js and vue-transition-ay11</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>
    </TransitionA11y>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Transition from 'vue-transition-a11y';

export default {
  data() {
    return {
      loaded: false,
    };
  },

  components: {
    Logo,
    TransitionA11y: Transition,
  },

  mounted() {
    this.loaded = true;
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
