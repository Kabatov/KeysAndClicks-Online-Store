<template>
    <main class="promo">
        <section class="category-swiper">
            <PromoItem />
            <div class="slidecontainer">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                    id="myRange"
                >
            </div>
        </section>
        <section class="promo-info">
            <PromoInfo :infoBlocks="promoBlocks"/>
        </section>
    </main>
</template>

<script>
import PromoItem from './PromoItem.vue';
import PromoInfo from './PromoInfo.vue';

export default {
  components: {
    PromoItem,
    PromoInfo
  },

  data() {
    return {
      promoBlocks: [
        { svg: '#', title: 'Сплит оплата', text: 'Закажите сейчас - оплатить можно потом' },
        { svg: '#', title: 'Все можно покликать в шоуруме', text: 'Все, что есть в наличии на сайте - есть в шоуруме' },
        { svg: '#', title: 'Доставка по России и не только', text: 'А еще по Беларуси, Казахстану, Армении и Кыргызстану' },
        { svg: '#', title: 'Гарантия на все', text: 'Даже на услуги и товары из Resale' }
      ]
    };
  }
};
</script>

<style>
.category-swiper {
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
</style>
