<template>
    <div class="promo-items__slider">
        <img
            class="promo-items__image"
            :src="periphery.image_link"
            :alt="periphery.image_alt"
        >
        <a class="promo-items__content">
            <p class="promo-items__product-name">{{ periphery.product_name }}</p>
            <span class="promo-items__description">{{ periphery.description }}</span>
        </a>
    </div>
</template>

<script>
export default {
  props: {
    periphery: {
      type: Object,
      required: true
    }
  }

};
</script>
