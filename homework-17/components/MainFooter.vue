<template>
  <footer class="mainFooter">
    <div class="mainFooter__wrapper center">
      <small>Stanislav Zavialov. "ONS 3 группа"</small>
      <small>1998 - 2021. &copy; Все права защищены</small>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainFooter'
})
</script>

<style lang="scss" scoped>
.mainFooter {
  grid-area: footer;
  background: #75787d;
  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
}
</style>
