<template>
  <li class="cartItem">
    <div class="cartItem__content">
      <a class="cartItem__imgLink" href="#" @click.stop.prevent>
        <img :src="require(`~/assets/${image}`)" class="cartItem__pic" alt="">
      </a>
      <div class="cartItem__desc">
        <a class="cartItem__title" href="#" @click.stop.prevent>
          {{ title }}
        </a>
        <div class="cartItem__rate">
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star-half-alt']" />
        </div>
        <p class="cartItem__price">
          {{ quantity }}
          <span class="cartItem__price-color">x</span>
          &dollar;{{ price }}
        </p>
      </div>
    </div>
    <button class="cartItem__delBtn" @click.prevent="deleteItem">
      <font-awesome-icon :icon="['fas', 'times-circle']" />
    </button>
  </li>
</template>

<script>
import Vue from 'vue'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CartDropItem',
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
    }
  }
})
</script>

<style lang="scss" scoped>
.cartItem {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #ededed;

  &__content {
    display: flex;
  }

  &__imgLink {
    display: inline-block;
    transition: filter .2s ease-in;
  }

  &__imgLink:hover {
    filter: brightness(88%);
  }

  &__pic {
    width: 72px;
    height: 85px;
    object-fit: cover;
    object-position: center;
  }

  &__desc {
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px 0 0 14px;
  }

  &__title {
    font-weight: bold;
    color: #222222;
    transition: ease .2s;

    &:hover {
      color: $brandColor;
    }
  }

  &__rate {
    color: $rateStarColor;
    margin-top: 9px;
    margin-bottom: 11px;
  }

  &__price {
    color: $brandColor;

    &-color {
      font-size: 10px;
      margin: 0 5px;
    }
  }

  &__delBtn {
    align-self: center;
    background: none;
    font-size: 16px;
    color: #c0c0c0;
    transition: all .2s;

    &:hover {
      color: black;
    }
  }
}
</style>
