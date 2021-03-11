<template>
  <div class="social">
    <a href="#" class="social__link" @click.stop.prevent>
      <font-awesome-icon class="social__icon" :icon="['fab', 'facebook-f']" size="1x" />
    </a>
    <a href="#" class="social__link" @click.stop.prevent>
      <font-awesome-icon class="social__icon" :icon="['fab', 'twitter']" />
    </a>
    <a href="#" class="social__link" @click.stop.prevent>
      <font-awesome-icon class="social__icon" :icon="['fab', 'linkedin-in']" />
    </a>
    <a href="#" class="social__link" @click.stop.prevent>
      <font-awesome-icon class="social__icon" :icon="['fab', 'pinterest-p']" />
    </a>
    <a href="#" class="social__link" @click.stop.prevent>
      <font-awesome-icon class="social__icon" :icon="['fab', 'google-plus-g']" />
    </a>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Social'
})
</script>

<style lang="scss" scoped>
.social {

  &__link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: white;
    color: #b2b2b2;
    &:not(:last-child) {
      margin-right: 7px;
    }
    &:hover {
      background-color: $brandColor;
      color: #ffffff;
    }
    &:hover .social__icon {
      background-color: $brandColor;
    }
  }
  &__icon {
    background-color: #ffffff;
    font-size: 16px;
  }
}
</style>
