<template>
    <div class="links-list__column">
        <h4 class="links-list__text">
            {{ title }}
        </h4>
        <ul class="links-list__list">
            <li
                class="links-list__item"
                v-for="item in links"
                :key="item.link"
            >
                <a
                    class="links-list__link"
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
.links-list {
    &__text {
        color: #696969;
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
