<template>
  <section class="promo center">
    <div class="promo-wrapper">
      <div class="promo-column">
        <div class="promo__item">
          <div class="promo__item-icon promo__item-icon--delivery" />
          <h3 class="promo__item-title">
            Free Delivery
          </h3>
          <p class="promo__item-text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="promo-column">
        <div class="promo__item">
          <div class="promo__item-icon promo__item-icon--discount" />
          <h3 class="promo__item-title">
            Sales & discounts
          </h3>
          <p class="promo__item-text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="promo-column">
        <div class="promo__item">
          <div class="promo__item-icon promo__item-icon--quality" />
          <h3 class="promo__item-title">
            Quality assurance
          </h3>
          <p class="promo__item-text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Promo'
})
</script>

<style lang="scss" scoped>
.promo {
  margin-top: 110px;
  height: 341px;
  background-color: #222224;
  &-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 89px;
  }
  &-column {
    text-align: center;
  }
  &__item {
    display: flex;
    flex-direction: column;
    max-width: 314px;
    &-icon {
      width: 49px;
      height: 49px;
      align-self: center;
      margin-bottom: 16px;
      &--delivery {
        background: url("~/assets/icons/delivery.svg") center / auto no-repeat
      }
      &--discount {
        background: url("~/assets/icons/discount.svg") center / auto no-repeat
      }
      &--quality {
        background: url("~/assets/icons/quality.svg") center / auto no-repeat
      }
    }
    &-title {
      font-size: 20px;
      font-weight: bold;
      color: #fbfbfb;
      text-align: center;
      letter-spacing: 0.03em;
      margin-bottom: 12px;
    }
    &-text {
      font-size: 14px;
      font-weight: 300;
      color: #fbfbfb;
      text-align: center;
      letter-spacing: 0.03em;
      line-height: 24px;
    }
  }
}
</style>
