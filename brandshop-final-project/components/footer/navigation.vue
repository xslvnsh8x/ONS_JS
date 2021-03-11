<template>
  <nav class="footerNav">
    <div class="footerNav__column">
      <div class="footerNav__title">
        <h3>COMPANY</h3>
      </div>
      <div class="footerNav__content">
        <ul class="footerNav__nav">
          <li class="footerNav__list">
            <NuxtLink to="/" class="footerNav__link">
              Home
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Shop
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              About
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              How It Works
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footerNav__column">
      <div class="footerNav__title">
        <h3>INFORMATION</h3>
      </div>
      <div class="footerNav__content">
        <ul class="footerNav__nav">
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              Terms & Condition
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              Privacy Policy
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              How to Buy
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              How to Sell
            </a>
          </li>
          <li class="footerNav__list">
            <a href="#" class="footerNav__link" @click.stop.prevent>
              Promotion
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footerNav__column">
      <div class="footerNav__title">
        <h3>SHOP CATEGORY</h3>
      </div>
      <div class="footerNav__content">
        <ul class="footerNav__nav">
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Men
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Women
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Child
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Apparel
            </NuxtLink>
          </li>
          <li class="footerNav__list">
            <NuxtLink to="/catalog" class="footerNav__link">
              Browse All
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation'
})
</script>

<style lang="scss" scoped>
.footerNav {
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  &__column {
    width: 200px;
  }
  &__title {
    font-size: 18px;
    font-weight: bold;
    color: $brandColor;
    letter-spacing: 0.03em;
    line-height: 26px;
    margin-bottom: 45px;
  }
  &__list {
    margin-bottom: 25px;
    &:last-child {
      margin: 0;
    }
  }
  &__link {
    font-size: 16px;
    color: #898989;
    letter-spacing: 0.03em;
    transition: all .2s;
    &:hover {
      color: $brandColor;
    }
  }
}
</style>
