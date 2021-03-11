<template>
  <section class="shoppingCart__footer center">
    <div class="shoppingCart__footer__column">
      <h2 class="shoppingCart__column__h2">
        Shipping Address
      </h2>
      <form action="#" @submit.prevent>
        <select
          class="select-country"
          name="country"
        >
          <option value="bangladesh">
            Bangladesh
          </option>
          <option value="rus">
            Russia
          </option>
          <option value="usa">
            USA
          </option>
          <option value="gb">
            Great Britain
          </option>
          <option value="ch">
            China
          </option>
          <option value="ukr">
            Ukraine
          </option>
          <option value="ca">
            Canada
          </option>
        </select>
        <input
          type="text"
          class="shoppingCart__input"
          placeholder="State"
        >
        <input
          type="text"
          class="shoppingCart__input"
          placeholder="Postcode / Zip"
        >
        <button class="shoppingCart__submit_btn" @click.stop.prevent>
          get a quote
        </button>
      </form>
    </div>
    <div class="shoppingCart__footer__column">
      <h2 class="shoppingCart__column__h2">
        coupon discount
      </h2>
      <p class="shoppingCart__column__p">
        Enter your coupon code if you have one
      </p>
      <form action="#" @submit.prevent>
        <input
          type="text"
          class="shoppingCart__input"
          placeholder="State"
        >
        <button class="shoppingCart__submit_btn" @click.stop.prevent>
          Apply coupon
        </button>
      </form>
    </div>
    <CartMainCompletionTotal />
  </section>
</template>

<script>
import Vue from 'vue'
import CartMainCompletionTotal from '~/components/cartMain/completion/total'

export default Vue.extend({
  name: 'CartMainCompletion',
  components: { CartMainCompletionTotal }
})
</script>

<style lang="scss" scoped>
.shoppingCart__footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 76px;

  .shoppingCart__footer__column {
    max-width: 355px;
    width: 100%;
    height: fit-content;
  }

  .shoppingCart__column__h2 {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
    margin-bottom: 21px;
  }

  .shoppingCart__column__p {
    font-size: 13px;
    line-height: 21px;
    color: #4a4a4a;
    margin-bottom: 24px;
  }

  .shoppingCart__submit_btn {
    display: inline-block;
    line-height: 34px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    padding: 0 15px;
    font-size: 11px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
    transition: all .2s;

    &:hover {
      color: $brandColor;
      border-color: $brandColor;
    }

    &:focus {
      color: $brandColor;
      border-color: $brandColor;
    }
  }

  .shoppingCart__input {
    font-size: 13px;
    color: #222222;
    padding: 0 12px 0 18px;
    width: 100%;
    line-height: 44px;
    margin-bottom: 20px;
    border: 1px solid #eaeaea;
    transition: all .2s;

    &:hover {
      border-color: #888;
    }

    &:focus {
      border-color: #aaa;
    }

    &::placeholder {
      font-size: 13px;
      font-weight: 300;
      color: #b1b1b1;
      width: 100%;
    }
  }
  .select-country {
    background-color: #fff;
    background-image: url("~/assets/icons/caret-down-solid.png");
    background-repeat: no-repeat, repeat;
    background-position: right 12px top 50%, 0 0;
    background-size: 9px auto, 100%;
    display: block;
    font-family: inherit;
    font-size: 13px;
    font-weight: 300;
    line-height: 44px;
    color: #b1b1b1;
    width: 100%;
    max-width: 100%;
    border: 1px solid #eaeaea;
    padding: 0 12px 0 18px;
    margin-bottom: 20px;
    transition: all .2s;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: #888;
      cursor: pointer;
    }

    &:focus {
      border-color: #aaa;
      color: #222;
      outline: none;
    }

    option {
      font-weight: normal;
    }
  }
}
</style>
