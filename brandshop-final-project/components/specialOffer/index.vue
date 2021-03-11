<template>
  <section class="specialOffer center">
    <div class="specialOffer__promo">
      <div class="specialOffer__promo-text">
        <h3 class="specialOffer__promo-title">
          30%
          <span class="text_color_mark"> OFFER</span>
        </h3>
        <p class="specialOffer__promo-subtitle">
          FOR WOMEN
        </p>
      </div>
    </div>
    <div class="specialOffer__info">
      <div class="specialOffer__infoItem">
        <div class="specialOffer__infoItem-columnLeft">
          <div class="specialOffer__infoItem-icon specialOffer__infoItem-icon--delivery" />
        </div>
        <div class="specialOffer__infoItem-columnRight">
          <h3 class="specialOffer__infoItem-title">
            Free Delivery
          </h3>
          <p class="specialOffer__infoItem-text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="specialOffer__infoItem">
        <div class="specialOffer__infoItem-columnLeft">
          <div class="specialOffer__infoItem-icon specialOffer__infoItem-icon--sales" />
        </div>
        <div class="specialOffer__infoItem-columnRight">
          <h3 class="specialOffer__infoItem-title">
            Sales & discounts
          </h3>
          <p class="specialOffer__infoItem-text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
      </div>
      <div class="specialOffer__infoItem">
        <div class="specialOffer__infoItem-columnLeft">
          <div class="specialOffer__infoItem-icon specialOffer__infoItem-icon--quality" />
        </div>
        <div class="specialOffer__infoItem-columnRight">
          <h3 class="specialOffer__infoItem-title">
            Quality assurance
          </h3>
          <p class="specialOffer__infoItem-text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SpecialOffer'
})
</script>

<style lang="scss" scoped>
.specialOffer {
  margin: 112px 0 97px 0;
  display: flex;
  width: 100%;
  &__promo {
    background-image: url("~/assets/img/specialOffer/promo.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 767px;
    width: 100%;
    &-text {
      letter-spacing: 0.025em;
      color: #ffffff;
      text-transform: uppercase;
      margin: 139px 0 0 39px;
    }
    &-title {
      font-size: 53.7px;
      font-weight: 700;
    }
    &-subtitle {
      font-size: 32.2px;
      line-height: 40px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 41px 63px 35px;
    background-color: #222224;
    max-width: 373px;
    height: 529px;
  }
  &__infoItem {
    display: flex;
    &-columnLeft {
      margin-right: 25px;
    }
    &-columnRight {
      color: #fbfbfb;
      letter-spacing: 0.03em;
    }
    &-icon {
      width: 47px;
      height: 40px;
      &--delivery {
        background: url("~/assets/img/specialOffer/delivery.png") top / auto no-repeat;
      }
      &--sales {
        background: url("~/assets/img/specialOffer/sales.png") top / auto no-repeat;
      }
      &--quality {
        background: url("~/assets/img/specialOffer/quality.png") top / auto no-repeat;
      }
    }
    &-title {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0 15px 3px;
    }
    &-text {
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0;
    }
  }
}
</style>
