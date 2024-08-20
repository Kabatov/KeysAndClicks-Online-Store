<template>
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
</template>

<script>

</script>

<style>

</style>
