<template>
  <div class="total">
    <div class="total__info">
      <p class="total__info-subtotal">
        Sub total <span>{{ sumTotal | priceFilter }}</span>
      </p>
      <h3 class="total__info-grandTotal">
        GRAND TOTAL <span>{{ sumTotal | priceFilter }}</span>
      </h3>
    </div>
    <NuxtLink to="/checkout" class="total__button">
      proceed to checkout
    </NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CartMainCompletionTotal',
  filters: {
    priceFilter (price) {
      const result = []
      const chars = String(price).split('').reverse()

      for (let i = 1; i <= chars.length; i++) {
        result.push(chars[i - 1])
        if ((i % 3 === 0) && chars[i]) {
          result.push(' ')
        }
      }
      return `$${result.reverse().join('')}`
    }
  },
  computed: {
    ...mapState('cart', {
      items: state => (state).items
    }),
    cartItems () {
      return Object.values(this.items)
    },
    sumTotal () {
      // eslint-disable-next-line no-return-assign
      return this.cartItems.reduce((accum, item) => accum = accum + (item.price * item.quantity), 0)
    }
  }
})
</script>

<style lang="scss" scoped>
.total {
  max-width: 360px;
  background-color: #f5f3f3;
  padding: 42px;
  height: fit-content;
  &__info {
    text-align: right;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 17px;
    &-subtotal {
      font-size: 11px;
      color: #4a4a4a;
      text-transform: uppercase;
      span {
        margin-left: 20px;
      }
    }
    &-grandTotal {
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      text-transform: uppercase;
      margin: 14px 0 21px 0;
      span {
        color: $brandColor;
        margin-left: 20px;
      }
    }
  }
  &__button {
    display: inline-block;
    width: 100%;
    padding: 0 40px;
    line-height: 50px;
    background-color: $brandColor;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    transition: all .2s;
    &:hover {
      background-color: $brandColorHover;
    }
    &:focus {
      background-color: $brandColorHover;
    }
  }
}
</style>
