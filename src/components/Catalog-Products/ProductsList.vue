<template>
    <div class="catalog-page__list">
        <ProductItem
            :product="product"
            v-for="product in productsListData"
            :key="product.id"
        />
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';
import { productsListData } from './productsListData';
</script>

<style>

</style>
