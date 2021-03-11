<template>
  <div class="tabContent">
    <div class="tabContent-wrapper">
      <div class="tabContent-column">
        <form class="tabContent-form" action="#" @submit.prevent>
          <h3 class="tabContent-title">
            Check as a guest or register
          </h3>
          <p class="tabContent-subtitle">
            Register with us for future convenience
          </p>
          <div class="tabContent__selection">
            <p class="tabContent__selectionItem">
              <input
                id="checkoutGuest"
                class="tabContent__selectionItem-input"
                type="radio"
                name="check"
                value="guest"
                checked
              >
              <label class="tabContent__selectionItem-label" for="checkoutGuest">
                checkout as guest
              </label>
            </p>
            <p class="tabContent__selectionItem">
              <input
                id="checkoutRegister"
                class="tabContent__selectionItem-input"
                type="radio"
                name="check"
                value="user"
              >
              <label class="tabContent__selectionItem-label" for="checkoutRegister">
                register
              </label>
            </p>
          </div>
          <h3 class="tabContent-title">
            register and save time!
          </h3>
          <p class="tabContent-subtitle">
            Register with us for future convenience
          </p>
          <div class="tabContent__reference">
            <p class="tabContent__referenceItem">
              <font-awesome-icon :icon="['fas', 'angle-double-left']" class="tabContent__referenceItem-icon" />
              Fast and easy checkout
            </p>
            <p class="tabContent__referenceItem">
              <font-awesome-icon :icon="['fas', 'angle-double-right']" class="tabContent__referenceItem-icon" />
              Easy access to your order history and status
            </p>
          </div>
          <div class="tabContent-button">
            Continue
          </div>
        </form>
      </div>
      <div class="tabContent-column">
        <form class="tabContent-form" action="#" @submit.prevent>
          <h3 class="tabContent-title">
            Already registered?
          </h3>
          <p class="tabContent-subtitle">
            Please log in below
          </p>
          <label class="tabContent__logIn-label" for="logInEmail">
            Email address
            <span class="tabContent__logIn-asterisk"> *</span>
          </label>
          <input
            id="logInEmail"
            class="tabContent__logIn-input"
            type="text"
            name="email"
            required
          >
          <label class="tabContent__logIn-label" for="logInPass">
            Password
            <span class="tabContent__logIn-asterisk"> *</span>
          </label>
          <input
            id="logInPass"
            class="tabContent__logIn-input"
            type="password"
            name="pass"
            required
          >
          <p class="tabContent__logIn-requiredText">
            * Required Fields
          </p>
          <div class="tabContent__footer">
            <button class="tabContent-button" @click.stop.prevent>
              Log In
            </button>
            <p class="tabContent__logIn-forgotPass">
              Forgot Password ?
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CheckoutTabContent'
})
</script>

<style lang="scss" scoped>
.tabContent {
  max-height: 0;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  -webkit-transition: max-height .35s;
  -o-transition: max-height .35s;
  transition: max-height .35s;

  &-wrapper {
    padding: 9px 30px 78px 30px;
    display: flex;
  }

  &-column {
    flex: 0 1 50%;
    height: auto;
  }

  &-form {
    display: flex;
    flex-direction: column;
    max-width: 390px;
    height: 100%;
    font-size: 13px;
    color: #222222;
  }

  &-title {
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: inherit;
    font-weight: inherit;
  }

  &-subtitle {
    color: #b3b2b2;
  }

  &__selection {
    margin: 33px 0;
  }

  &__selectionItem {
    &:not(:last-child) {
      padding-bottom: 15px;
    }
    &-label {
      font-size: 12px;
      text-transform: uppercase;
      margin-left: 14px;
    }
  }

  &__reference {
    margin: 25px 0 30px 0;
    flex-grow: 1;
    &Item {
      color: #b3b2b2;
      line-height: 20px;
    }
  }

  &__logIn {

    &-label {
      font-size: 12px;
      color: #222222;
      margin: 20px 0 14px 0;
    }

    &-asterisk {
      font-size: 17px;
      color: #ff0d0d;
    }

    &-input {
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      line-height: 44px;
      font-size: 13px;
      color: #222222;
      padding: 0 14px;
      transition: all .2s;
      &:hover {
        border: 1px solid #c0c0c0;
      }
      &:focus {
        border: 1px solid #c0c0c0;
      }
    }

    &-requiredText {
      color: #ff0d0d;
      margin-top: 20px;
      flex-grow: 1;
    }

    &-forgotPass {
      font-size: 14px;
      color: #222222;
      line-height: 48px;
      margin-left: 32px;
      transition: all .3s;
      cursor: pointer;
      &:hover {
        color: $brandColor;
      }
    }
  }

  &__footer {
    display: flex;
  }

  &-button {
    display: inline-block;
    line-height: 48px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    width: fit-content;
    padding: 0 53px;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      color: $brandColor;
      border-color: $brandColor;
    }
  }
}
</style>
