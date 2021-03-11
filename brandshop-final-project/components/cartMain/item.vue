<template>
  <div class="container">
    <div class="cartItem">
      <a class="cartItem__link" href="#" @click.stop.prevent>
        <img class="cartItem__image" :src="require(`~/assets/${image}`)" alt="">
      </a>
      <div class="cartItem__desc">
        <a href="#" @click.stop.prevent>
          <h2 class="cartItem__title">
            {{ title }}
          </h2>
        </a>
        <div class="cartItem__color">
          <span class="cartItem__color__option">Color:</span> Red
        </div>
        <div class="cartItem__size">
          <span class="cartItem__size__option">Size:</span> XL
        </div>
      </div>
    </div>
    <div class="cartItem__productPrice">
      ${{ price }}
    </div>
    <div class="cartItem__productQty">
      <font-awesome-icon
        :icon="['fas', 'minus-circle']"
        class="cartItem__productAction-icon"
        @click="decreaseItem"
      />
      {{ quantity }}
      <font-awesome-icon
        :icon="['fas', 'plus-circle']"
        class="cartItem__productAction-icon"
        @click="increaseItem"
      />
    </div>
    <div class="cartItem__productShipping">
      FREE
    </div>
    <div class="cartItem__productSubtotal">
      {{ subtotal | priceFilter }}
    </div>
    <div class="cartItem__productAction" @click="deleteItem">
      <font-awesome-icon :icon="['fas', 'times-circle']" class="cartItem__productAction-icon" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CartMainItem',
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
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.item.product_name
    },
    image () {
      return this.item.img
    },
    price () {
      return this.item.price
    },
    quantity () {
      return this.item.quantity
    },
    subtotal () {
      return this.quantity * this.price
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch(`cart/${ACTION_TYPES.DEL_ITEM}`, this.item)
    },
    increaseItem () {
      this.$store.dispatch(`cart/${ACTION_TYPES.INCREASE_ITEM}`, this.item)
    },
    decreaseItem () {
      this.$store.dispatch(`cart/${ACTION_TYPES.DECREASE_ITEM}`, this.item)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #eaeaea;
  margin-top: 20px;
  color: #656565;
  & > div:first-child {
    width: 460px;
  }
  & > div:not(:first-child) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.cartItem {
  display: flex;
  &__link {
    margin-right: 21px;
  }
  &__image {
    width: 100px;
    height: 115px;
    object-fit: cover;
    object-position: center;
    transition: filter .2s ease-in;
    &:hover {
      filter: brightness(88%);
    }
  }
  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 22px;
    color: #575757;
  }
  &__title {
    margin-top: 0;
    margin-bottom: auto;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: uppercase;
    color: #222222;
    transition: all ease 0.2s;
    &:hover {
      color: $brandColor;
    }
  }
  &__color {
    font-weight: 100;
    line-height: 20px;
    color: #6f6e6e;
    &__option {
      font-weight: 400;
      margin-right: 4px;
      color: #575757;
    }
  }
  &__size {
    font-weight: 100;
    line-height: 20px;
    color: #6f6e6e;
    &__option {
      font-weight: 400;
      margin-right: 4px;
      color: #575757;
    }
  }
  &__productPrice {
    width: 78px;
  }
  &__productQty {
    width: 68px;
    justify-content: space-between !important;
    &-icon {
      background: $brandColor;
    }
  }
  &__productShipping {
    width: 62px;
  }
  &__productSubtotal {
    width: 66px;
  }
  &__productAction {
    width: 50px;
    &-icon {
      color: #c0c0c0;
      font-size: 16px;
      cursor: pointer;
      transition: all ease 0.3s;
      &:hover {
        color: $brandColor;
      }
    }
  }
}
</style>
