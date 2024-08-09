<template>
    <div class="product-card__container">
        <div class="product-card">
            <div class="product-card__card">
                <img
                    class="product-card__image"
                    :src="product.image_link"
                    :alt="product.name"
                    width="700"
                    height="400"
                >
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
        <div class="product-card__description-container">
            <h2 class="product-card__description-name">
                Описание
            </h2>
            <p class="product-card__description">
                {{ product.description }}
            </p>
        </div>
        <div class="product-card__characteristics">
            <h2 class="product-card__characteristics-name">
                Характеристики
            </h2>
            <div class="product-card__characteristics-data">
                <table>
                    <tr
                        v-for="(value, label) in product.characteristics"
                        :key="label"
                    >
                        <td class="product-card__characteristics-label">
                            {{ label }}
                        </td>
                        <td class="product-card__meaning">
                            {{ value }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { productsListData } from './productsListData';

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
  }

  &__characteristics-data {
    padding: 10px;
    margin: 10px 400px 0 400px;
    font-size: 20px;
    border: 3px solid #6495ED;
    border-radius: 25px;
  }

  &__meaning {
    padding: 10px 0 0 40px;
  }
}

</style>
