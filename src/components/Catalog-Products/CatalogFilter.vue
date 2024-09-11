<template>
    <div class="catalog-filter">
        <h3 class="catalog-filter__title">
            Фильтры
        </h3>

        <CatalogFilterList v-model="categoryData" />
        <CatalogFilterPrice v-model="priceRange" />
        <CatalogFilterBrand v-model="brandData" />

        <button
            @click.prevent="applyFilters"
            class="catalog-filter__button"
        >
            Применить фильтр
        </button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import CatalogFilterPrice from './CatalogFilterPrice.vue';
import CatalogFilterBrand from './CatalogFilterBrand.vue';
import CatalogFilterList from './CatalogFilterList.vue';

const priceRange = ref('');
const brandData = ref('All');
const categoryData = ref('');
const emit = defineEmits();

const applyFilters = () => {
  emit('aplyteFilters', {
    price: priceRange.value,
    brand: brandData.value,
    category: categoryData.value
  });
};
</script>

<style lang="scss">
.catalog-filter {
    padding: 20px;
    width: 300px;
    font-family: Arial, sans-serif;

    &__title {
        margin-top: 0;
        font-size: 26px;
    }

    &__title-category {
        padding-top: 20px;
    }

    &__list {
        margin-bottom: 15px;
    }

    &__price {
        margin-bottom: 15px;
    }

    &__brand {
        margin-bottom: 15px;
    }

    &__item {
        padding-top: 10px;
        display: block;
    }

    &__title-price {
        padding-top: 15px;
    }

    &__input {
        margin-top: 10px;
        width: 100%;
    }

    &__title-brand {
        padding-bottom: 10px;
    }

    &__brand-list {
        width: 100px;
        height: 30px;
    }

    &__button {
        background-color: #6495ED;
        color: white;
        border-radius: 15px;
        border: none;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #6495ED;
        }
    }
}
</style>
