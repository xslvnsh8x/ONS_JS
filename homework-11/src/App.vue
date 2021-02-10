<template>
  <div id="app" class="mainWrapper">
    <MainHeader></MainHeader>
    <MainContent></MainContent>
    <MainFooter author="Stanislav Zavialov" year="2021"></MainFooter>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    MainFooter,
    MainHeader,
  },
};
</script>

<style lang="scss">
@import "src/styles/normalize";

.mainWrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 120px 1fr 50px;
}

.center {
  padding: 0 calc(50% - 620px);
}
</style>
