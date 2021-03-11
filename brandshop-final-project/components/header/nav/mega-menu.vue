<template>
  <div class="megaMenu">
    <div class="megaMenu__block">
      <div class="megaMenu__content">
        <h3 class="megaMenu__title">
          Men
        </h3>
        <ul class="megaMenu__list">
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Dresses
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Tops
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Sweaters/Knits
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Jackets/Coats
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Blazers
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Denim
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Leggings/Pants
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Skirts/Shorts
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="megaMenu__block">
      <div class="megaMenu__content">
        <h3 class="megaMenu__title">
          Men
        </h3>
        <ul class="megaMenu__list">
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Dresses
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Tops
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Sweaters/Knits
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Jackets/Coats
            </a>
          </li>
        </ul>
      </div>
      <div class="megaMenu__content">
        <h3 class="megaMenu__title">
          Men
        </h3>
        <ul class="megaMenu__list">
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Dresses
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Tops
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Sweaters/Knits
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="megaMenu__block">
      <div class="megaMenu__content">
        <h3 class="megaMenu__title">
          Men
        </h3>
        <ul class="megaMenu__list">
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Dresses
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Tops
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Sweaters/Knits
            </a>
          </li>
          <li class="megaMenu__item">
            <a href="#" class="megaMenu__link" @click.stop.prevent>
              Jackets/Coats
            </a>
          </li>
        </ul>
      </div>
      <div class="megaMenu__content">
        <NuxtLink to="/catalog" class="megaMenu__promo">
          <img
            class="megaMenu__promo-img"
            src="~/assets/img/mega-promo.jpg"
            alt="Super sale!"
          >
          <h4 class="megaMenu__promo-text">
            Super sale!
          </h4>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MegaMenu'
})
</script>

<style lang="scss" scoped>
.megaMenu {
  display: none;
  position: absolute;
  top: 46px;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 20px 19px 20px;
  z-index: 4;
  -webkit-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.15);
  &__block {
    width: 234px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:not(:last-child) {
      margin-right: 46px;
    }
  }
  &__content {
    position: relative;
  }
  &__title {
    border-bottom: 1px solid #e8e8e8;
    padding: 7px 0;
    margin-bottom: 14px;
    font-size: 14px;
    font-weight: 600;
    color: #232323;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  &__link {
    font-size: 14px;
    color: #646464;
    letter-spacing: 0.03em;
    transition: all .2s;
    &:hover {
      color: $brandColor;
    }
  }
  &__promo {
    position: absolute;
    right: 0;
    bottom: 0;
    &-img {
      position: relative;
    }
    &-text {
      position: absolute;
      max-width: 75px;
      bottom: 6px;
      right: 7px;
      font-size: 22px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: 0.03em;
      line-height: 28px;
      text-transform: uppercase;
    }
  }
}
</style>
