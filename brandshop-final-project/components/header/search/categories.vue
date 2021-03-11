<template>
  <ul class="browse">
    <li class="browse__btn">
      <div class="browse__link">
        <span>Browse</span>
        <font-awesome-icon :icon="['fas', 'caret-down']" class="browse__icon" />
      </div>
      <div class="browse__drop">
        <div class="browse__drop__container">
          <div class="browse__drop__content">
            <h3 class="browse__drop__title">
              Women
            </h3>
            <ul class="browse__drop__list">
              <li class="browse__drop__item">
                <a href="" class="browse__drop__link" @click.stop.prevent>
                  Dresses
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="" class="browse__drop__link" @click.stop.prevent>
                  Tops
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Sweaters/Knits
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Jackets/Coats
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Blazers
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Denim
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Leggings/Pants
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Skirts/Shorts
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div class="browse__drop__content">
            <h3 class="browse__drop__title">
              Men
            </h3>
            <ul class="browse__drop__list">
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Tees/Tank tops
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Shirts/Polos
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Sweaters
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Sweatshirts/Hoodies
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Blazers
                </a>
              </li>
              <li class="browse__drop__item">
                <a href="#" class="browse__drop__link" @click.stop.prevent>
                  Jackets/vests
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Categories'
})
</script>

<style lang="scss" scoped>
.browse {
  height: 100%;

  &__btn {
    height: 100%;

    &:focus .browse__drop,
    &:focus-within .browse__drop,
    &:hover .browse__drop {
      display: block;
      -webkit-animation: slide-down .4s ease;
      -moz-animation: slide-down .4s ease;
      animation: slide-down .4s ease;
    }
  }

  &__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    background-color: #f5f5f5;
    height: 100%;
    padding-left: 13px;
    border-right: 1px solid #ececec;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-weight: 300;
    color: #222222;
    letter-spacing: 0.03em;
    cursor: pointer;
  }

  &__icon {
    margin: 0 8px 0 8px;
    font-size: 14px;
    color: #838383;
  }

  &__drop {
    display: none;
    position: absolute;
    top: 35px;
    left: -1px;
    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 11px 13px;
    z-index: 5;

    -webkit-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);

    &__container {
      position: relative;
      width: 236px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        transform: rotate(-45deg);
        background-color: #ffffff;
        top: -15px;
        left: 57px;
      }
    }

    &__content {
      &:not(:first-child) {
        margin-top: 18px;
      }
    }

    &__title {
      border-bottom: 1px solid #e8e8e8;
      padding: 8px 0;
      margin-bottom: 14px;
      font-size: 14px;
      font-weight: 600;
      color: #232323;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    &__list {
      margin-left: 5px;
    }

    &__item {
      margin-bottom: 14px;
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
  }
}
</style>
