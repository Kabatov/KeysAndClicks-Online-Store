<template>
    <div class="swiper">
        <div
            v-for="periphery in peripherys"
            :key="periphery.id"
            class="swiper-slider"
        >
            <a
                :href="periphery.image_link"
                class="swiper-slider__link"
            >
                <img
                    class="swiper-slider__image"
                    :src="periphery.image_link"
                    :alt="periphery.image__alt"
                >
            </a>
            <a
                :href="periphery.link"
                class="swiper-slider__content"
            >
                <h1 class="text-product">{{ periphery.name }}</h1>
                <p class="product-description">{{ periphery.description }}</p>
            </a>
        </div>
    </div>
</template>

<script>
import { peripheryData } from './peripheryData';

export default {
  data() {
    return {
      peripherys: peripheryData
    };
  }
};
</script>

<style>
.swiper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
}

.swiper-slider {
    padding-right: 20px;
    /* height: 580px;
    width: 500px; */
}

.swiper-slider__link {
    /* width: 432px;
    height: 432px; */
    text-decoration: none;
    color: #000000;
}

.swiper-slider__image {
    width: 300px;
    height: 250px;
}

.swiper-slider__content {
    text-decoration: none;
    color: #000000;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 18px;
}

.text-product {
    font-size: 17px;
}

.product-description {
    font-size: 14px;
}
</style>
