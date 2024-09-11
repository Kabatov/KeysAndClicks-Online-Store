<template>
    <div class="product-card__container">
        <div class="product-card">
            <div class="product-card__card">
                <!-- <img
                    class="product-card__image"
                    :src="product.image_link"
                    :alt="product.name"
                > -->
            </div>
            <div class="product-card__card-price">
                <h2 class="product-card__name">
                    {{ product.name }}
                </h2>
                <p class="product-card__key-select">
                    Раскладка от производителя
                </p>
                <div class="product-card__key-layout">
                    <h3 class="product-card__key-name">
                        {{ product.keyName }}
                    </h3>
                    <p class="product-card__key-description">
                        {{ product.keyDescription }}
                    </p>
                </div>
                <p class="product-card__price">
                    {{ product.price }} ₽
                </p>
                <button class="product-card__basket">
                    В корзину
                </button>
            </div>
        </div>
        <ProductCardDescription :description="product.description" />
        <ProductCardCharacteristics :characteristics="product.characteristics" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { productsListData } from './productsListData';
import ProductCardDescription from './ProductCardDescription.vue';
import ProductCardCharacteristics from './ProductCardCharacteristics.vue';

const props = defineProps({
  productId: Number
});

const product = productsListData.find((productItem) => productItem.id === props.productId);
</script>

<style lang="scss">
.product-card {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;

  &__image {
    border-radius: 20px;
    width: 700px;
    height: 400px;
  }

  &__name {
    font-size: 30px;
  }

  &__price {
    padding-top: 20px;
    font-size: 24px;
  }

  &__basket {
    margin-top: 20px;
    width: 140px;
    height: 50px;
    font-size: 15px;
    color: white;
    border-radius: 15px;
    border: 1px solid white;
    background-color: #6495ED;
    cursor: pointer;
  }

  &__key-select {
    padding-top: 20px;
  }

  &__key-layout {
    width: 400px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid #6495ED;
    border-radius: 25px;
  }

  &__description-container {
    padding-top: 50px;
    text-align: center;
  }

  &__description {
    font-size: 20px;
    padding-top: 10px;
    margin: 0 100px 0 100px;
  }

  &__characteristics {
    padding-top: 20px;
  }

  &__characteristics-name {
    text-align: center;
    margin-bottom: 10px;
  }

  &__characteristics-data {
    width: 500px;
    padding: 10px;
    margin: 0 auto;
    font-size: 20px;
    border: 3px solid #6495ED;
    border-radius: 25px;
  }

  &__meaning {
    padding: 10px 0 0 40px;
  }
}

</style>
