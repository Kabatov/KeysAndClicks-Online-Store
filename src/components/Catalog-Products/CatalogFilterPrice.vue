<template>
    <div class="catalog-filter__price">
        <h4 class="catalog-filter__title-price">
            Цена
        </h4>
        <input
            class="catalog-filter__input"
            v-model="valueRange"
            min="0"
            max="1000"
            @input="updatePrice"
        >
        <p>Максимальная цена: <span>60000</span> руб.</p>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const valueRange = ref('');
const emit = defineEmits();

const updatePrice = () => {
  console.log(updatePrice, 'это инпут');
  emit('update:modelValue', valueRange.value);
};
</script>

<style>

</style>
