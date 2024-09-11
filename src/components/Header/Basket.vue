<template>
    <div>
        <div class="list-items-basket__shadow" />
        <div class="list-items-basket__main-basket">
            <HeaderBasket />
            <CartItemListBasket />
            <div>
                <div class="list-items-basket__final-price">
                    <span>Итого:</span>
                    <b>12990 руб.</b>
                </div>
                <button class="list-items-basket__final-price-button">
                    Оформить заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderBasket from './HeaderBasket.vue';
import CartItemListBasket from './CartItemListBasket.vue';

</script>

<style lang="scss">
.list-items-basket {
    &__shadow {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: black;
        z-index: 10;
        opacity: .7;
    }

    &__main-basket {
        background: white;
        width: 30%;
        height: 100%;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 20;
        padding: 20px;
    }

    &__header-basket {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__close-basket {
        margin-right: 20px;
        cursor: pointer;
        opacity: .6;

        &:hover {
            opacity: 100;
        }
    }

    &__final-price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    &__final-price-button {
        font-size: 16px;
        color: white;
        background: #6495ED;
        width: 100%;
        border: 1px solid #6495ED;
        border-radius: 20px;
        padding: 15px 0 15px 0;
        &:hover {
            background: #2c5ebb;
        }
        &:active {
            background: #0d48b6;
        }
        cursor: pointer;
    }
}
</style>
