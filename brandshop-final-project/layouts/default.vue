<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/header'
import Footer from '~/components/footer'

export default Vue.extend({
  components: { Header, Footer }
})

</script>

<style lang="scss">
html {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
}

.center {
  padding: 0 calc(50% - 570px);
}

.text_color_mark {
  color: $brandColor
}

.button {
  display: inline-block;
  background-color: $brandColor;
  padding: 0 13px 0 20px;
  font-size: 15px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #ffffff;
  transition: all .2s;

  &:hover {
    background-color: $brandColorHover;
  }

  i {
    font-size: 14px;
    margin-left: 8px;
  }
}

.logo {
  display: inline-flex;
  align-items: center;
  font-size: 27px;
  line-height: 32px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #222222;

  &__img {
    background-image: url("~/assets/img/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 59px;
    height: 51px;
    margin-right: 13px;
  }

  &__textMark {
    font-weight: 900;
    color: $brandColor
  }
}
</style>
