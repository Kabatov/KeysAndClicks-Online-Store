<template>
    <div class="catalog-filter__brand">
        <h4 class="catalog-filter__title-brand">
            Бренд
        </h4>
        <select
            class="catalog-filter__brand-list"
            v-model="valueBrand"
            @change="updateBrand"
        >
            <option
                v-for="brand in catalogFilterBrand"
                :key="brand.value"
                :value="brand.value"
            >
                {{ brand.name_brand }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { catalogFilterBrand } from './catalogFilterBrand';

const valueBrand = ref('All');
const emit = defineEmits();

const updateBrand = () => {
  emit('update:modelValue', valueBrand.value);
};
</script>

<style>

</style>
