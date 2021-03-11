<template>
  <section class="subscribe">
    <div class="subscribe__body">
      <div class="subscribe__content center">
        <div class="subscribe__content__column">
          <div class="subscribe__left">
            <div class="subscribe__quotePic">
              <div class="subscribe__quotePic__img" />
            </div>
            <div class="subscribe__quoteText">
              <p class="subscribe__quoteText__main">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
              </p>
              <p class="subscribe__quoteText__author">
                Bin Burhan
              </p>
              <p class="subscribe__quoteText__else">
                Dhaka, Bd
              </p>
              <div class="subscribe__quoteText__pagination">
                <a href="#" class="subscribe__quoteText__pagination__link" @click.stop.prevent />
                <a href="#" class="subscribe__quoteText__pagination__link quote-active" @click.stop.prevent />
                <a href="#" class="subscribe__quoteText__pagination__link" @click.stop.prevent />
              </div>
            </div>
          </div>
        </div>
        <div class="subscribe__content__column subscribe__content__columnRight">
          <section class="subscribe__right">
            <div class="subscribe__right__text">
              <h3 class="subscribe__right__title">
                Subscribe
              </h3>
              <p class="subscribe__right__subtitle">
                FOR OUR NEWLETTER AND PROMOTION
              </p>
            </div>
            <div class="subscribe__form">
              <form class="subscribe__email" action="#">
                <label for="email" />
                <div class="subscribe__email__item">
                  <input
                    id="email"
                    class="subscribe__email__input"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  >
                  <button class="subscribe__btn" @click.stop.prevent>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Subscribe'
})
</script>

<style lang="scss" scoped>
.subscribe {
  margin-bottom: 109px;

  &__body {
    background-image: url("~/assets/img/subscribe/subscribe_back.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 438px;
  }

  &__content {
    display: flex;

    &__column {
      display: flex;
      flex: 1 1 50%;
    }

    &__columnRight {
      justify-content: center;
      padding-top: 145px;
    }
  }

  &__left {
    display: flex;
    padding-top: 111px;
  }

  &__quotePic {
    margin-right: 28px;

    &__img {
      background: url("~/assets/img/subscribe/face.png") center / cover no-repeat;
      width: 83px;
      height: 83px;
    }
  }

  &__quoteText {
    font-size: 16px;
    color: #222224;

    &__main {
      line-height: 26px;
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0.025em;
      margin-bottom: 17px;
    }

    &__author {
      font-weight: 700;
      letter-spacing: 0.025em;
      color: $brandColor;
    }

    &__else {
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
    }

    &__pagination {
      display: flex;
      margin-top: 41px;

      &__link {
        display: inline-block;
        width: 38px;
        height: 4px;
        background-color: #d6d6d6;
        margin-right: 13px;
        transition: all .3s;

        &:hover {
          background-color: $brandColor;
        }

        &:last-child {
          margin: 0;
        }
      }

      .quote-active {
        background-color: $brandColor;
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    text-align: center;

    &__text {
      color: #222224;
      letter-spacing: 0.03em;
      margin-bottom: 35px;
    }

    &__title {
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 9px;
    }
  }

  &__email {
    border-radius: 23px;
    background-color: #e1e1e1;

    &__item {
      display: inline-flex;
      align-items: center;
      width: 100%;
      position: relative;
      height: 46px;
    }

    &__input {
      background-color: #e1e1e1;
      width: 280px;
      padding: 0 23px;
      margin-left: 5px;
    }
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    height: 100%;
    background-color: $brandColor;
    color: #ffffff;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    padding: 0 20px;
    letter-spacing: 0.03em;
    transition: all .3s;

    &:hover {
      background-color: $brandColorHover;
    }
  }
}
</style>
