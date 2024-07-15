<template>
    <Carousel :items-to-show="3">
        <Slide
            v-for="periphery in peripherys"
            :key="periphery.id"
        >
            <PromoItem :periphery="periphery" />
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation
} from 'vue3-carousel';
import { ref } from 'vue';
import { peripheryData } from './peripheryData';
import PromoItem from './PromoItem.vue';

const peripherys = ref(peripheryData);
console.log('куку', peripherys.value);
</script>

<style lang="scss">
.promo-items {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
    font-size: 18px;

    &__slider {
      padding-right: 20px;
    }

    &__link {
      text-decoration: none;
      color: #000000;
    }

    &__image {
      width: 300px;
      height: 250px;
    }

    &__content {
      text-decoration: none;
      color: #000000;
      font-size: 18px;
    }

    &__description {
      font-size: 14px;
    }
}
</style>
