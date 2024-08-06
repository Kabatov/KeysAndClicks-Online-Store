<template>
    <div class="catalog-page">
        <h1 class="catalog-page__title">
            Кликай в удовольствие!
        </h1>
        <div class="catalog-page__container">
            <CatalogFilter />
            <ProductsList />
        </div>
    </div>
</template>

<script setup>
import CatalogFilter from './CatalogFilter.vue';
import ProductsList from './ProductsList.vue';

</script>

<style lang="scss">
.catalog-page {
  &__title {
    padding-top: 30px;
    text-align: center;
    font-size: 38px;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: end;
    gap: 20px;
    padding: 0 30px 0 30px;
  }

  &__products {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &__product-name {
    font-size: 18px;
    margin: 0;
  }

  &__product-description {
    margin: 5px 0;
  }

  &__product-price {
    margin: 5px 0;
  }

  &__image {
    width: 250px;
    height: 150px;
  }
}
</style>
