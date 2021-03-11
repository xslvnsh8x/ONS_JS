<template>
  <div class="item">
    <div class="itemWrapper">
      <a href="#" @click.stop.prevent>
        <img :src="require(`~/assets/${image}`)" class="item-img" alt="">
      </a>
      <div class="item-text">
        <a href="#" class="item-name" @click.stop.prevent>
          {{ title }}
        </a>
        <p class="item-price text_color_mark">
          &dollar;{{ price }}
        </p>
      </div>
      <button class="item-add" type="button" @click="addToCart">
        <img
          class="item-addCart"
          src="~/assets/icons/cart_white.png"
          alt="cart"
        >
        {{ buttonText }}
      </button>
      <div class="item__rate">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star-half-alt']" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CatalogListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('cart', {
      cartItems: state => (state).items
    }),
    image () {
      return this.item.img
    },
    title () {
      return this.item.product_name
    },
    price () {
      return this.item.price
    },
    buttonText () {
      // eslint-disable-next-line no-prototype-builtins
      const isAdded = this.cartItems.hasOwnProperty(this.item.id)

      return isAdded ? 'In Cart' : 'Add to Cart'
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch(`cart/${ACTION_TYPES.ADD_ITEM}`, this.item)
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 38px;
  &Wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 261px;
    height: 100%;
    transition: all .2s ease-in-out;
    &:hover {
      -webkit-box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16);
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16);
      .item-img {
        filter: brightness(35%);
        transition: filter .2s ease-in-out;
      }
      .item-add {
        display: flex;
      }
      .item__rate {
        display: inline-block;
        color: $rateStarColor;
        font-size: 12px;
      }
    }
  }
  &-img {
    width: 100%;
  }
  &-add {
    position: absolute;
    display: none;
    justify-content: space-evenly;
    align-items: center;
    width: 124px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 120px;
    padding: 0 12px;
    text-align: center;
    background: none;
    outline: none;
    border: 1px solid #ffffff;
    border-radius: 1px;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    &:hover {
      -webkit-box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 9px 2px rgba(255, 255, 255, 0.5);
      transition: 0.2s ease;
    }
    &Cart {
      margin-right: 7px;
    }
  }
  &-text {
    margin: 19px 15px;
    text-transform: uppercase;
    font-weight: 700;
    flex: 1 1 auto;
  }
  &-name {
    font-size: 13px;
    color: #222222;
    transition: all 0.2s;
    &:hover {
      color: $brandColor;
    }
  }
  &-price {
    font-size: 16px;
    margin-top: 17px;
  }
  &__rate {
    display: none;
    position: absolute;
    bottom: 22px;
    right: 13px;
    &-icon {
      font-size: 14px;
      color: $rateStarColor;
    }
  }
}
</style>
