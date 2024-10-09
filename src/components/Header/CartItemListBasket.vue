<template>
    <div class="cart-item-list-backet">
        <CartItemBasket />
        <CartItemBasket />
        <CartItemBasket />
        <CartItemBasket />
    </div>
</template>

<script setup>
import CartItemBasket from './CartItemBasket.vue';

</script>

<style lang="scss">
.cart-item-list-backet {
    display: grid;
    gap: 20px;
    margin-bottom: 20px;
}
</style>
