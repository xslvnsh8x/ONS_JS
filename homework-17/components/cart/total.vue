<template>
  <div class="totalWrapper">
    <div class="proceed">
      <button :disabled="!cartItems.length" class="btn proceed__btn">
        Перейти к оформлению
      </button>
      <small class="proceed__text">
        Доступные способы и время доставки можно выбрать при оформлении заказа
      </small>
    </div>
    <div class="info">
      <div class="info__row info__heading">
        <h4>
          Ваша корзина
        </h4>
        <p>
          {{ cartItems.length }} товаров • 1.66 кг
        </p>
      </div>
      <div class="info__row info__count">
        <p>
          Товары ({{ cartItems.length }})
        </p>
        <p>
          {{ sumTotal }} ₽
        </p>
      </div>
      <div class="info__row info__discount">
        <p>
          Скидка
        </p>
        <p>
          - {{ discount }} ₽
        </p>
      </div>
      <div class="info__row info__footer">
        <h3>
          Общая стоимость
        </h3>
        <p>
          {{ totalWithDiscount }} ₽
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CartTotal',
  computed: {
    ...mapState('cart', {
      items: state => (state as any).items
    }),
    cartItems () {
      return Object.values(this.items)
    },
    sumTotal () {
      return this.cartItems.reduce((accum, item) => accum += item.price, 0)
    },
    totalWithDiscount () {
      // return goodsOnSale.reduce((accum, item) => accum += item.new_price, 0)

      let totalWithDiscount = 0

      const result = this.cartItems.forEach((item) => {
        if (item.discount === true) {
          totalWithDiscount += item.new_price
        } else {
          totalWithDiscount += item.price
        }
      })
      return totalWithDiscount
    },
    discount () {
      return this.sumTotal - this.totalWithDiscount
    }
  }
})
</script>

<style lang="scss" scoped>
.totalWrapper {
  padding: 16px;
}

.proceed {
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e2e2;
  &__btn {
    width: 100%;
    height: 48px;
  }
  &__text {
    margin-top: 10px;
    color: grey;
  }
}

.info {
  padding-top: 16px;
  &__row {
     display: flex;
     justify-content: space-between;
   }
}
</style>
