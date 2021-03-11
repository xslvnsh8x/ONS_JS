<template>
  <ul class="cart">
    <li class="cart__item">
      <img class="cartIcon" src="~/assets/icons/cart.png" alt="">
      <div class="cartDrop">
        <div v-if="!cartItems.length" class="cartDrop__noData">
          <h3 class="cartDrop__noData-title">
            Your cart is empty
          </h3>
          <p class="cartDrop__noData-subtitle">
            It's time to start shopping!
          </p>
        </div>
        <div v-else class="cartDrop__container">
          <ul class="cartDrop-itemsWrapper">
            <CartDropItem
              v-for="item in cartItems"
              :key="item.id"
              :item="item"
            />
          </ul>
          <ul>
            <li>
              <div class="cartDrop__totalPrice">
                <h3 class="cartDrop__totalPrice__text">
                  TOTAL
                </h3>
                <h3 class="cartDrop__totalPrice__text">
                  {{ sumTotal | priceFilter }}
                </h3>
              </div>
            </li>
            <li>
              <NuxtLink to="/checkout" class="cartDrop__btn">
                Checkout
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cart" class="cartDrop__btn">
                Go to cart
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import CartDropItem from '~/components/header/cart/item'

export default Vue.extend({
  name: 'Cart',
  components: { CartDropItem },
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
.cart {
  display: flex;
  align-items: flex-end;
  margin-right: 25px;

  &__item {
    position: relative;
    &:hover .cartDrop,
    &:focus .cartDrop,
    &:focus-within .cartDrop {
      display: block;
      -webkit-animation: slide-down .4s ease;
      -moz-animation: slide-down .4s ease;
      animation: slide-down .4s ease;
    }
  }
}

.cartIcon {
  height: 32px;
  width: 32px;
  cursor: pointer;
  object-fit: contain;
  object-position: bottom;
}

.cartDrop {
  display: none;
  width: 262px;
  position: absolute;
  top: 32px;
  left: -20px;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 20px 16px 11px 16px;
  z-index: 5;
  -webkit-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  &__totalPrice {
    display: flex;
    justify-content: space-between;
    margin: 18px 0 25px 0;
    &__text {
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      text-transform: uppercase;
    }
  }
  &__btn {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
    line-height: 48px;
    border: 1px solid #eaeaea;
    margin: 5px 0;
    transition: all .2s;
    &:hover {
      color: $brandColor;
      border-color: $brandColor;
    }
  }
  &__noData {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      margin-bottom: 12px;
    }
    &-subtitle {
      margin-bottom: 8px;
      color: #4a4a4a;
    }
  }
  &-itemsWrapper {
    max-height: 358px;
    overflow-y: auto;
  }
}
</style>
