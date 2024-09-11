<template>
    <div class="product-card__description-container">
        <h2 class="product-card__description-name">
            Описание
        </h2>
        <p class="product-card__description">
            {{ description }}
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  description: String
});
</script>

<style>

</style>
