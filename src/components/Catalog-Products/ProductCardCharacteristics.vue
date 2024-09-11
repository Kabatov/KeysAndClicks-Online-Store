<template>
    <div class="product-card__characteristics">
        <h2 class="product-card__characteristics-name">
            Характеристики
        </h2>
        <div class="product-card__characteristics-data">
            <table>
                <tr
                    v-for="characteristic in characteristics"
                    :key="characteristic.label"
                >
                    <td class="product-card__characteristics-label">
                        {{ characteristic.label }}
                    </td>
                    <td class="product-card__meaning">
                        {{ characteristic.value }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  characteristics: Object
});
</script>

<style>

</style>
