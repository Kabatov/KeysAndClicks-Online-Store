<template>
    <div class="cart-item-basket">
        <img
            class="cart-item-basket__image-cart"
            src="../UI/varmilo-panda.jpg"
            alt="Keyboard"
        >
        <div class="cart-item-basket__product-name">
            <p>Клавиатура Varmilo Panda</p>
            <div class="cart-item-basket__product-price">
                <b>12990 руб.</b>
                <img
                    class="cart-item-basket__product-delete"
                    src="../UI/close-button-basket.svg"
                    alt="Удалить продукт"
                >
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.cart-item-basket {
    display: flex;
    align-items: center;
    border: 1px solid #6495ED;
    padding: 16px;
    border-radius: 20px;

    &__image-cart {
        width: 120px;
        height: 100px;
    }

    &__product-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
    }

    &__product-price {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    &__product-delete {
        opacity: .4;
        cursor: pointer;
        &:hover {
            opacity: 100;
        }
    }
}

</style>
