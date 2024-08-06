<template>
    <router-link to="/catalog/:product-id">
        <div class="catalog-page__products">
            <img
                class="catalog-page__image"
                :src="product.image_link"
            >
            <h2 class="catalog-page__product-name">
                {{ product.name }}
            </h2>
            <p class="catalog-page__product-price">
                Цена: {{ product.price }} ₽
            </p>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  product: Object
});
</script>
