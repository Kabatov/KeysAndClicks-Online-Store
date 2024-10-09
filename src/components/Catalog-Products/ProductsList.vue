<template>
    <div class="catalog-page__list">
        <ProductItem
            :product="product"
            v-for="product in list"
            :key="product.id"
        />
    </div>
</template>

<script setup>
import {
  computed,
  defineProps, ref, watchEffect
} from 'vue';
import ProductItem from './ProductItem.vue';
import { productsListData } from './productsListData';

const props = defineProps({
  aplyFilter: Object
});

const filterList = ref();

const list = computed(() => {
  if (props.aplyFilter) {
    return filterList.value;
  }
  return productsListData;
});

watchEffect(() => {
  if (!props.aplyFilter) {
    return;
  }
  filterList.value = productsListData.filter((product) => product.price < props.aplyFilter.price);
});
</script>

<style>

</style>
