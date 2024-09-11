<template>
    <div class="catalog-filter__list">
        <h4 class="catalog-filter__title-category">
            Категория
        </h4>
        <label
            class="catalog-filter__item"
            v-for="category in catalogFilterCategory"
            :key="category.name"
        >
            <input
                type="checkbox"
                v-model="categoryBrand[category.model]"
            > {{ category.name }}
        </label>
    </div>
</template>

<script setup>
import { reactive, defineEmits, watch } from 'vue';
import { catalogFilterCategory } from './catalogFilterCategory';

const emit = defineEmits();
const categoryBrand = reactive({
  valueKeyboard: false,
  valueMice: false,
  valueUpgrade: false,
  valueTools: false
});

watch(categoryBrand, (newValue) => {
  console.log(categoryBrand, 'это лист');
  emit('update:modelValue', newValue);
}, { deep: true });
</script>

<style>

</style>
