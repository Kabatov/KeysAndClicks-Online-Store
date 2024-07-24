<template>
    <div>
        <ProductItem
            :products="products"
            v-for="product in products"
            :key="product.id"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';
import { productsListData } from './productsListData';

const products = ref(productsListData);
</script>

<style>

</style>
