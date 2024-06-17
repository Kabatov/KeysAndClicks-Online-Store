<template>
    <div class="promo-info__container">
        <div class="promo-info__block"
             v-for="item in infoBlocks"
             :key="item.infoBlock"
        >
            {{ item.svg }}
            <h2 class="promo-info__name">
                {{ item.title }}
            </h2>
            <p class="promo-info__description">
                {{ item.text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    infoBlocks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.promo-info__container {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    gap: 5px;
}

.promo-info__name {
    margin: 16px 0 4px 0;
}
</style>
