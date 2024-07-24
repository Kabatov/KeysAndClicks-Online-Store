<template>
    <div class="catalog-page__products">
        <h2 class="catalog-page__product-name">
            {{ products.name }}
        </h2>
        <p class="catalog-page__product-description">
            {{ products.description }}
        </p>
        <p class="catalog-page__product-price">
            Цена: {{ products.price }} ₽
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  products: Object
});
</script>

<style>

</style>
