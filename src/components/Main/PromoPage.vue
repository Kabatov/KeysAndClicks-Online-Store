<template>
    <main class="promo-page">
        <section class="promo-page__swiper">
            <PromoItems />
        </section>
        <section class="promo-page__info">
            <PromoInfo />
        </section>
    </main>
</template>

<script setup>
import PromoItems from './PromoItems.vue';
import PromoInfo from './PromoInfo.vue';

</script>

<style lang="scss">
.promo-page {

    &__swiper {
        padding: 20px;
        background-color: #B0C4DE;
        border-radius: 20px;
    }

    &__info {
        padding: 50px 30px 0;
        font-size: 16px;
    }
}

</style>
