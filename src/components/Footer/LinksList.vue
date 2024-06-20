<template>
    <div class="footer-info__column">
        <h4 class="footer-info__text">
            {{ title }}
        </h4>
        <ul class="footer-info__list">
            <li
                class="footer-info__item"
                v-for="item in links"
                :key="item.link"
            >
                <a
                    class="footer-info__link"
                    :href="item.link"
                >
                    {{ item.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.footer-info {
    &__text {color: #696969;
    margin-bottom: 12px;
    font-size: 18px;}

    &__list {
        list-style-type: none;
    }

    &__link {
        text-decoration: none;
        color: white;
    }
}
</style>
