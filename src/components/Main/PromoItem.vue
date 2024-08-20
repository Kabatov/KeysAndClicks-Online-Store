<template>
    <div class="promo-items__slider">
        <img
            class="promo-items__image"
            :src="periphery.image_link"
            :alt="periphery.image_alt"
        >
        <a class="promo-items__content">
            <p class="promo-items__product-name">{{ periphery.product_name }}</p>
            <span class="promo-items__description">{{ periphery.description }}</span>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  periphery: Object
});
</script>
