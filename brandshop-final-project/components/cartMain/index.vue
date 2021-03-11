<template>
  <section class="shoppingCart center">
    <div v-if="!cartItems.length" class="shoppingCart__noData">
      <h2 class="shoppingCart__noData-title">
        Your cart is empty
      </h2>
      <p class="shoppingCart__noData-subtitle">
        It's time to start shopping!
      </p>
    </div>
    <div v-else>
      <header class="shoppingCart__header shoppingCart__tableRow">
        <div class="shoppingCart__product">
          Product details
        </div>
        <div class="shoppingCart__productPrice">
          Unite price
        </div>
        <div class="shoppingCart__productQty">
          Quantity
        </div>
        <div class="shoppingCart__productShipping">
          Shipping
        </div>
        <div class="shoppingCart__productSubtotal">
          Subtotal
        </div>
        <div class="shoppingCart__productAction">
          Action
        </div>
      </header>
      <CartMainItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
      />
      <CartMainActions />
      <CartMainCompletion />
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import CartMainItem from '~/components/cartMain/item'
import CartMainActions from '~/components/cartMain/actions'
import CartMainCompletion from '~/components/cartMain/completion'

export default Vue.extend({
  name: 'CartMain',
  components: { CartMainCompletion, CartMainActions, CartMainItem },
  computed: {
    ...mapState('cart', {
      items: state => (state).items
    }),
    cartItems () {
      return Object.values(this.items)
    },
    sumTotal () {
      // eslint-disable-next-line no-return-assign
      return this.cartItems.reduce((accum, item) => accum = accum + item.price, 0)
    }
  }
})
</script>

<style lang="scss" scoped>
.shoppingCart {
  margin-top: 82px;
  &__noData {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      margin-bottom: 32px;
      font-size: 2rem;
    }
    &-subtitle {
      font-size: 1.5rem;
      margin-bottom: 36px;
      color: #4a4a4a;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    font-size: 13px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.015em;
    color: #222222;
    padding-bottom: 19px;
    margin-top: 0;
    & > div:first-child {
      width: 460px;
    }
    & > div:not(:first-child) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
