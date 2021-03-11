<template>
  <section class="featured center">
    <header class="featured__header">
      <h2 class="featured__header-title">
        Featured Items
      </h2>
      <p class="featured__header-subtitle">
        Shop for items based on what we featured in this week
      </p>
    </header>
    <FeaturedList
      :products="productsMock"
      class="featuredList"
    />
    <footer class="featured__footer">
      <NuxtLink to="/catalog" class="button featured__footer-btn">
        Browse All Product
        <font-awesome-icon class="arrow-right-icon" :icon="['fas', 'long-arrow-alt-right']" />
      </NuxtLink>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue'
import FeaturedList from '~/components/catalog/featured/featured-list'
import productsMock from '~/assets/json/products.json'

export default Vue.extend({
  name: 'Featured',
  components: { FeaturedList },
  data () {
    return {
      productsMock
    }
  }
})
</script>

<style lang="scss" scoped>
.featured {
  margin-top: 100px;
  &__header {
    text-align: center;
    letter-spacing: 0.03em;
    &-title {
      font-size: 30px;
      font-weight: bold;
      color: #222222;
      margin-bottom: 12px;
    }
    &-subtitle {
      font-size: 14px;
      color: #9f9f9f;
    }
  }
  &__footer {
    text-align: center;
    margin-top: 18px;
    &-btn {
      line-height: 49px;
      font-size: 16px;
      font-weight: 700;
      padding: 0 18px 0 23px;
      .arrow-right-icon {
        font-size: 15px;
        margin-left: 8px;
        transition: all 0.2s ease;
      }
      &:hover .arrow-right-icon {
        transform: scale(1.4);
      }
    }
  }
}
.featuredList {
  margin-top: 58px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
