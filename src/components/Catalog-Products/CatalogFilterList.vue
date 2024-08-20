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
                @change="updateCategories"
            > {{ category.name }}
        </label>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { catalogFilterCategory } from './catalogFilterCategory';

const emit = defineEmits();
const categoryBrand = ref({
  valueKeyboard: false,
  valueMice: false,
  valueUpgrade: false,
  valueTools: false
});

const updateCategories = () => {
  emit('update:modelValue', categoryBrand.value);
};
</script>

<style>

</style>
