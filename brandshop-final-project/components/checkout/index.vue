<template>
  <section class="checkout center">
    <div class="checkout__wrap">
      <div class="checkout__tab">
        <input
          id="tab-one"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
          checked
        >
        <label class="checkout__tab__title" for="tab-one">
          01. Shipping Address
        </label>
        <CheckoutTabContent class="checkoutTabContent" />
      </div>
      <div class="checkout__tab">
        <input
          id="tab-two"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
        >
        <label class="checkout__tab__title" for="tab-two">
          02. Billing INFORMATION
        </label>
        <div class="checkoutTabContent">
          <div class="checkoutTabContent-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quod totam? Aliquam ea fugiat in
              itaque odio officia voluptatibus?
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat magni numquam optio quasi, saepe
              tempore temporibus. Ad blanditiis harum inventore officia. Architecto impedit ipsam possimus tempora,
              tenetur vel voluptate.
            </p>
          </div>
        </div>
      </div>
      <div class="checkout__tab">
        <input
          id="tab-three"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
        >
        <label class="checkout__tab__title" for="tab-three">
          03. Shipping information
        </label>
        <div class="checkoutTabContent">
          <div class="checkoutTabContent-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quod totam? Aliquam ea fugiat in
              itaque odio officia voluptatibus?
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat magni numquam optio quasi, saepe
              tempore temporibus. Ad blanditiis harum inventore officia. Architecto impedit ipsam possimus tempora,
              tenetur vel voluptate.
            </p>
          </div>
        </div>
      </div>
      <div class="checkout__tab">
        <input
          id="tab-four"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
        >
        <label class="checkout__tab__title" for="tab-four">
          04. Shipping Method
        </label>
        <div class="checkoutTabContent">
          <div class="checkoutTabContent-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quod totam? Aliquam ea fugiat in
              itaque odio officia voluptatibus?
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat magni numquam optio quasi, saepe
              tempore temporibus. Ad blanditiis harum inventore officia. Architecto impedit ipsam possimus tempora,
              tenetur vel voluptate.
            </p>
          </div>
        </div>
      </div>
      <div class="checkout__tab">
        <input
          id="tab-five"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
        >
        <label class="checkout__tab__title" for="tab-five">
          05. Payment Method
        </label>
        <div class="checkoutTabContent">
          <div class="checkoutTabContent-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quod totam? Aliquam ea fugiat in
              itaque odio officia voluptatibus?
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat magni numquam optio quasi, saepe
              tempore temporibus. Ad blanditiis harum inventore officia. Architecto impedit ipsam possimus tempora,
              tenetur vel voluptate.
            </p>
          </div>
        </div>
      </div>
      <div class="checkout__tab">
        <input
          id="tab-six"
          class="checkout__defaultInput"
          type="radio"
          name="tabs"
        >
        <label class="checkout__tab__title" for="tab-six">
          06. Order Review
        </label>
        <div class="checkoutTabContent">
          <div class="checkoutTabContent-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quod totam? Aliquam ea fugiat in
              itaque odio officia voluptatibus?
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugiat magni numquam optio quasi, saepe
              tempore temporibus. Ad blanditiis harum inventore officia. Architecto impedit ipsam possimus tempora,
              tenetur vel voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import CheckoutTabContent from '~/components/checkout/tab-content'

export default Vue.extend({
  name: 'Checkout',
  components: { CheckoutTabContent }
})
</script>

<style lang="scss" scoped>
.checkout {
  margin: 65px 0 92px 0;

  &__tab {
    position: relative;
    margin-bottom: 0;
    width: 100%;
    overflow: hidden;

    &__title {
      position: relative;
      display: block;
      line-height: 71px;
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  &__defaultInput {
    position: absolute;
    opacity: 0;
    z-index: -10;
  }

  &__defaultInput:checked ~ .checkoutTabContent {
    max-height: 100vh;
  }
}

.checkoutTabContent {
  max-height: 0;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  -webkit-transition: max-height .35s;
  -o-transition: max-height .35s;
  transition: max-height .35s;

  &-wrapper {
    padding: 9px 30px 78px 30px;
  }
}
</style>
