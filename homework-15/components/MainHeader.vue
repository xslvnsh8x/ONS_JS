<template>
  <header class="mainHeader center">
    <NuxtLink to="/">
      <img class="logo" src="/svg/ozon23.svg" alt="">
    </NuxtLink>
    <NuxtLink to="/cart" class="cartButton">
      Корзина
      <div class="counter">
        13
      </div>
    </NuxtLink>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainHeader'
})
</script>

<style scoped>
.mainHeader {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 128px;
  height: 40px;
}

.cartButton {
  display: flex;
  text-decoration: none;
  font-size: 1.1rem;
}

.counter {
  margin-left: 6px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #75787d;
  border-radius: 50%;
  font-size: .78rem;
  font-weight: 500;
  color: white;
}
</style>
