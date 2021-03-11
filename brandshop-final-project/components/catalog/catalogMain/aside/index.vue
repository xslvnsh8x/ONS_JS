<template>
  <aside class="aside">
    <nav>
      <details class="aside__navItem" open>
        <summary class="aside__navItem-name">
          Category
        </summary>
        <div class="aside__navItem-wrapper">
          <ul>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Accessories
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Bags
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Denim
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Hoodies & Sweatshirts
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Jackets & Coats
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Pants
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Polos
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Shirts
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Shoes
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Shorts
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Sweaters & Knits
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                T-Shirts
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Tanks
              </a>
            </li>
          </ul>
        </div>
      </details>
      <details class="aside__navItem">
        <summary class="aside__navItem-name">
          Brand
        </summary>
        <div class="aside__navItem-wrapper">
          <ul>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Mango
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Moschino
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Alexa
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Agnes
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Sylva
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Blaze
              </a>
            </li>
          </ul>
        </div>
      </details>
      <details class="aside__navItem">
        <summary class="aside__navItem-name">
          Designer
        </summary>
        <div class="aside__navItem-wrapper">
          <ul>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Mango
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Moschino
              </a>
            </li>
            <li class="aside__navItem-item">
              <a class="aside__navItem-link" href="#" @click.stop.prevent>
                Binburhan
              </a>
            </li>
          </ul>
        </div>
      </details>
    </nav>
  </aside>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogMainAside'
})
</script>

<style lang="scss" scoped>
.aside {
  max-width: 243px;
  width: 100%;
  &__navItem {
    width: 100%;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 17px;
    &:last-child {
      margin: 0;
    }
    &:hover {
      cursor: pointer;
    }
    &[open] {
      border-bottom: none;
    }
    &[open] summary ~ * {
      animation: open .3s ease-in-out;
    }
    &[open]>.aside__navItem-name::after {
      color: $brandColor;
      transform: rotate(270deg);
    }
    &-name {
      border-left: 6px solid #f16d7f;
      padding: 0 6px 0 11px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: bold;
      color: #f16d7f;
      line-height: 38px;
      text-transform: uppercase;
      user-select: none;
      list-style: none;
      &::-webkit-details-marker {
        display: none;
      }
      &::after {
        content: "\276F";
        font-size: 12px;
        color: #6f6e6e;
        transform: rotate(90deg);
        transition: all .35s;
      }
    }
    &-wrapper {
      border-top: 1px solid #ebebeb;
      padding: 22px 18px;
    }
    &-item {
      margin-bottom: 19px;
      &:last-child {
        margin: 0;
      }
    }
    &-link {
      font-size: 14px;
      color: #6f6e6e;
      &:hover {
        color: #f16d7f;
      }
    }
  }
}
</style>
