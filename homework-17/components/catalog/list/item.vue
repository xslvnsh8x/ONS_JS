<template>
  <div class="item">
    <div class="item__imageWrapper">
      <img :src="image" class="item__image" alt="item-pic">
    </div>
    <div class="item__desc">
      <h3 class="item__desc-price">
        {{ price | priceFilter }}
      </h3>
      <h4 class="item__desc-title">
        {{ title | cutTitleFilter }}
      </h4>
      <button class="item__desc-addBtn btn" @click="addToCart">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CatalogListItem',
  filters: {
    priceFilter (price: number): string {
      const result = []
      const chars = String(price).split('').reverse()

      for (let i = 1; i <= chars.length; i++) {
        result.push(chars[i - 1])
        if ((i % 3 === 0) && chars[i]) {
          result.push(' ')
        }
      }
      return `${result.reverse().join('')} ₽`
    },
    cutTitleFilter (title: string): string {
      return title.length > 60
        ? `${title.substring(0, 57)}...`
        : title
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('cart', {
      cartItems: state => (state as any).items
    }),
    image (): string {
      return this.item.image
    },
    title (): string {
      return this.item.title
    },
    description (): string {
      return this.item.description
    },
    price (): number {
      return this.item.price
    },
    buttonText (): string {
      const isAdded = this.cartItems.hasOwnProperty(this.item.id)

      return isAdded ? 'В корзине' : 'В корзину'
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
  display: grid;
  grid-template-rows: 250px auto;

  &__imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    height: 250px;
    width: 250px;
    object-fit: contain;
  }

  &__desc {
    display: grid;
    grid-template-rows: 50px 70px 1fr;
    justify-items: start;

    &-title {
      font-weight: 500;
    }

    &-addBtn {
    }
  }
}
</style>
