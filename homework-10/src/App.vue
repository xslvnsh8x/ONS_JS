<template>
  <div id="app" class="wrapper">
    <MainHeader title="Welcome to my first Vue.js App" />
    <MainContent />
    <MainFooter author="Stanislav Zavialov" year="2021" />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainContent from '@/components/MainContent.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
@import "style/reset";
@import "style/variables";

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: $daintree;
}

.wrapper {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 120px 1fr 50px;
  min-height: 100vh;
  background: $concrete;
}

.center {
  padding: 0 calc(50% - 600px);
}
</style>
