<template>
  <div class="cookie">
    <div class="cookie__counter">
      <h2 class="cookie__counter-heading">
        You clicked <span class="cookie__counter-num">{{ counter }}</span> times!
      </h2>
    </div>
    <div class="cookie__clicker">
      <div
        class="cookie__clicker-bg"
        @click="counter++"
      ></div>
    </div>
    <div class="cookie__goals">
      <p
        v-show="counter >= 10 && counter < 20"
        class="cookie__goals-text"
      >Congrats! You're a beginner cookie-clicker! =)
      </p>
      <p
        v-show="counter >= 20"
        class="cookie__goals-text"
      >Congrats! You're a pro cookie-clicker! =)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookie',
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.cookie {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__counter {
    margin-top: 48px;

    &-heading {
      font-size: 1.5rem;
    }

    &-num {
      font-size: 2rem;
    }
  }

  &__clicker {
    &-bg {
      width: 400px;
      height: 400px;
      margin: 0 auto;
      border-radius: 50%;
      background: url(../assets/cookie.png) center / 503px no-repeat;
      cursor: pointer;
      transition: transform .05s ease-in;

      &:active {
        transform: scale(0.99);
      }
    }
  }
  &__goals {
    margin-top: 48px;

    &-text {
      font-size: 1.5rem;
    }
  }
}
</style>
