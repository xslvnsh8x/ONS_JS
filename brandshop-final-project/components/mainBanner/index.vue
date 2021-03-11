<template>
  <section class="mainBanner center">
    <div class="mainBanner-wrapper">
      <div class="mainBanner-block" />
      <div class="mainBanner__text">
        <p class="mainBanner__text-top">
          THE BRAND
        </p>
        <p class="mainBanner__text-bottom">
          OF LUXERIOUS
          <span class="text_color_mark"> FASHION</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MainBanner'
})
</script>

<style lang="scss" scoped>
.mainBanner {
  background-color: #e8e8e8;
  &-wrapper {
    background: url("~/assets/img/mainBanner/main-banner.jpg") bottom no-repeat;
    height: 614px;
    padding-top: 218px;
    display: flex;
  }
  &-block {
    width: 12px;
    height: 92px;
    background-color: $brandColor;
    margin: 9px 12px 0 0;
  }
  &__text {
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #222222;
    &-top {
      font-size: 60px;
      line-height: 60px;
      margin-bottom: 3px;
    }
    &-bottom {
      font-size: 40px;
    }
  }
}
</style>
