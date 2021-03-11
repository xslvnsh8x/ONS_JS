<template>
  <div>
    <MainBanner />
    <Featured />
    <SpecialOffer />
  </div>
</template>

<script>
import Vue from 'vue'
import Featured from '~/components/catalog/featured'
import MainBanner from '~/components/mainBanner'
import SpecialOffer from '~/components/specialOffer'

export default Vue.extend({
  components: { SpecialOffer, MainBanner, Featured }
})
</script>
