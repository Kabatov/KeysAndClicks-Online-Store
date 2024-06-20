<template>
    <main class="promo-page">
        <section class="promo-page__swiper">
            <PromoItems />
        </section>
        <section class="promo-page__info">
            <PromoInfo :info-blocks="promoBlocks" />
        </section>
    </main>
</template>

<script>
import PromoItems from './PromoItems.vue';
import PromoInfo from './PromoInfo.vue';
import { promoInfoData } from './promoInfoData';

export default {
  components: {
    PromoItems,
    PromoInfo
  },

  data() {
    return {
      promoBlocks: promoInfoData
    };
  }
};
</script>

<style lang="scss">
.promo-page {

    &__swiper {
        padding: 20px;
        background-color: #B0C4DE;
        border-radius: 20px;
    }

    &__info {
        padding: 50px 30px 0;
        font-family: 'Franklin Gothic Medium', sans-serif;
        font-size: 16px;
    }
}

</style>
