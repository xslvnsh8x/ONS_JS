<template>
  <div class="mainWrapper">
    <MainHeader />
    <div class="main center">
      <Nuxt />
    </div>
    <MainFooter />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  color: #3b3b3f;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.mainWrapper {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 80px 1fr 50px;
}

.main {
  grid-area: main;
}

.center {
  padding: 0 calc(50% - 600px);
}
</style>
