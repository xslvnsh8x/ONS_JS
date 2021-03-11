<template>
  <div class="filter">
    <div class="filter-column">
      <div class="filter-title">
        <h4>
          Trending now
        </h4>
      </div>
      <div class="filter__trending">
        <ul class="filter__trending-list">
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Bohemian
            </a>
          </li>
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Floral
            </a>
          </li>
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Lace
            </a>
          </li>
        </ul>
        <ul class="filter__trending-list">
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Floral
            </a>
          </li>
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Lace
            </a>
          </li>
          <li class="filter__trending-item">
            <a class="filter__trending-link" href="#" @click.stop.prevent>
              Bohemian
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="filter-column">
      <div class="filter-title">
        <h4>
          Size
        </h4>
      </div>
      <ul class="filter__size">
        <li class="filter__size-item">
          <input id="size-xxs" class="filter__size-checkbox" type="checkbox">
          <label for="size-xxs" class="filter__size-label">
            XXS
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-xs" class="filter__size-checkbox" type="checkbox">
          <label for="size-xs" class="filter__size-label">
            XS
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-s" class="filter__size-checkbox" type="checkbox">
          <label for="size-s" class="filter__size-label">
            S
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-m" class="filter__size-checkbox" type="checkbox">
          <label for="size-m" class="filter__size-label">
            M
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-l" class="filter__size-checkbox" type="checkbox">
          <label for="size-l" class="filter__size-label">
            L
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-xl" class="filter__size-checkbox" type="checkbox">
          <label for="size-xl" class="filter__size-label">
            XL
          </label>
        </li>
        <li class="filter__size-item">
          <input id="size-xxl" class="filter__size-checkbox" type="checkbox">
          <label for="size-xxl" class="filter__size-label">
            XXL
          </label>
        </li>
      </ul>
    </div>
    <div class="filter-column">
      <div class="filter-title">
        <h4>
          rice
        </h4>
      </div>
      <label>
        <input class="filter__range" type="range">
      </label>
      <div class="filter__range-text">
        <p>
          $52
        </p>
        <p>
          $400
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogMainHeaderFilter'
})
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: space-between;
  &-column {
    max-width: 264px;
    width: 100%;
  }
  &-title {
    margin-bottom: 25px;
    font-size: 14px;
    font-weight: bold;
    color: #6f6e6e;
    text-transform: uppercase;
  }
  &__trending {
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 11px;
    }
    .filter__trending-item+.filter__trending-item:before {
      padding: 9px;
      font-size: 14px;
      color: #dfdfdf;
      content: "|\00a0";
    }
    &-link {
      font-size: 14px;
      color: #6f6e6e;
      transition: all 0.15s;
      &:hover {
        color: $brandColor;
      }
    }
  }
  &__size {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 63px;
      margin-bottom: 12px;
    }
    &-label {
      font-size: 14px;
      color: #6f6e6e;
      text-transform: uppercase;
    }
    &-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
      &+.filter__size-label {
        display: inline-flex;
        align-items: center;
        user-select: none;
      }
      &+.filter__size-label::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        margin-right: 9px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 80% 80%;
        transition: all 0.2s ease;
      }
      &:checked+.filter__size-label::before {
        border-color: $brandColor;
        background-color: $brandColor;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      }
      /* стили при наведении курсора на checkbox */
      &:not(:disabled):not(:checked)+.filter__size-label:hover::before {
        border-color: #f0c8cd;
      }
      /* стили для чекбокса, находящегося в фокусе */
      &:focus+.filter__size-label::before {
        box-shadow: 0 0 0 0.2rem rgba(241, 109, 127, 0.25);
      }
      /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
      &:focus:not(:checked)+.filter__size-label::before {
        border-color: rgba(241, 109, 127, 0.25);
      }
    }
  }
  &__range {
    width: 100%;
    -webkit-appearance: none;
    background-color: #f0f0f0;
    &::-webkit-slider-runnable-track {
      height: 6px;
      -webkit-appearance: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: #f16d7f;
      cursor: pointer;
      margin-top: -5px;
    }
    &::-moz-range-thumb {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: #f16d7f;
      cursor: pointer;
    }
    &::-ms-thumb {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background-color: #f16d7f;
      cursor: pointer;
    }
    &-text {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      font-size: 14px;
      color: #6f6e6e;
    }
  }
}
</style>
