<template>
    <div class="promo-items">
        <PromoItem
            v-for="periphery in peripherys"
            :key="periphery.id"
            :periphery="periphery"
        />
        <div class="promo-items__button-slider">
            <button class="promo-items__button-prev">
                &lt;
            </button>
            <button class="promo-items__button-next">
                &gt;
            </button>
        </div>
    </div>
</template>

<script>
import { peripheryData } from './peripheryData';
import PromoItem from './PromoItem.vue';

export default {
  components: {
    PromoItem
  },
  data() {
    return {
      peripherys: peripheryData
    };
  }
};
</script>

<style>
.promo-items {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
}

.promo-items__slider {
    padding-right: 20px;
}

.promo-items__link {
    text-decoration: none;
    color: #000000;
}

.promo-items__image {
    width: 300px;
    height: 250px;
}

.promo-items__content {
    text-decoration: none;
    color: #000000;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 18px;
}

.promo-items__product-name {
    font-size: 18px;
}

.promo-items__description {
    font-size: 14px;
}
.promo-items__button-prev,
.promo-items__button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-400%);
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  font-size: 24px;
  color: dark;
  border: 1px solid black;
  border-radius: 50%;
}

.promo-items__button-prev {
  left: 10px;
}

.promo-items__button-next {
  right: 10px;
}
</style>
