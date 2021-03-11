<template>
  <footer class="footer">
    <Subscribe />
    <section class="footer__mainFooter center">
      <div class="footer__about">
        <div class="footer__about__logo">
          <nuxt-link to="/" class="logo">
            <div class="logo__img" />
            BRAN<span class="logo__textMark">D</span>
          </nuxt-link>
        </div>
        <div class="footer__about__text">
          <p>
            Objectively transition extensive data rather than cross functional solutions. Monotonectally
            syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded
            array of processes and cross-unit partnerships.
          </p>
          <p>
            Efficiently plagiarize 24/365 action items and focused infomediaries.
            Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
          </p>
        </div>
      </div>
      <Navigation />
    </section>
    <section class="footer__smallFooter center">
      <div class="footer__smallFooter__text">
        &copy;&nbsp;2021 Stanislav Zavialov. All Rights Reserved.
      </div>
      <Social />
    </section>
  </footer>
</template>

<script>
import Vue from 'vue'
import Subscribe from '~/components/footer/subscribe'
import Navigation from '~/components/footer/navigation'
import Social from '~/components/footer/social'

export default Vue.extend({
  name: 'Footer',
  components: { Navigation, Subscribe, Social }
})
</script>

<style lang="scss" scoped>
.footer {

  &__mainFooter {
    display: flex;
    margin-bottom: 95px;
  }

  &__about {
    display: flex;
    flex-direction: column;
    flex: 0 1 433px;
    margin-right: 56px;

    &__logo {
      margin-bottom: 27px;
    }

    &__text {
      font-weight: 300;
      color: #898989;
      letter-spacing: 0.03em;
      line-height: 24px;

      p {
        margin-bottom: 15px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }

  &__smallFooter {
    height: 79px;
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      font-size: 16px;
      letter-spacing: 0.025em;
      color: #7a7a7a;
    }
  }
}
</style>
