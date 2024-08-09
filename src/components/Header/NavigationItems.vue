<template>
    <nav class="navigation">
        <ul class="navigation__items">
            <li
                class="navigation__item"
                v-for="item in links"
                :key="item.link"
            >
                <RouterLink
                    :to="item.link"
                    class="navigation__link"
                >
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import { navigationData } from './navigationData';

export default {
  components: {
    RouterLink
  },

  props: {
    links: {
      type: Array,
      required: true,
      default: () => navigationData
    }
  }
};
</script>

<style lang="scss">
.navigation {
    &__items {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    &__item {
      margin-right: 20px;
      font-size: 16px;
    }

    &__link {
      width: 100px;
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
}
</style>
