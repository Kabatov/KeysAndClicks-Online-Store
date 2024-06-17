<template>
    <main class="promo-page">
        <section class="promo-page__swiper">
            <PromoItems />
        </section>
        <section class="promo-page__info">
            <PromoInfo :infoBlocks="promoBlocks"/>
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

<style>
.promo-page__swiper {
    padding: 20px;
    background-color: #B0C4DE;
    border-radius: 20px;
}

.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 5px;
    margin-top: 15px;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 55px;
    height: 5px;
    background: #696969;
    cursor: pointer;
    border-radius: 5px;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
}

.promo-page__info {
    padding: 50px 30px 0;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 16px;
}

</style>
