<template>
    <div class="promo-info">
        <div
            class="promo-info__content"
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
import { promoInfoData } from './promoInfoData';

export default {
  props: {
    infoBlocks: {
      type: Array,
      required: true,
      default: () => promoInfoData
    }
  }
};
</script>

<style lang="scss">
.promo-info {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    gap: 5px;

    &__name {
        margin: 16px 0 4px 0;
    }
}
</style>
