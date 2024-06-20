<template>
    <nav class="navigation">
        <ul class="navigation__items">
            <li
                class="navigation__item"
                v-for="item in links"
                :key="item.link"
            >
                <a
                    :href="item.link"
                    class="navigation__link"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
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
      font-family: 'Franklin Gothic Medium', sans-serif;
    }

    &__link {
      width: 100px;
      color: black;
      text-decoration: none;
    }

    &__link:hover {
      text-decoration: underline;
    }
}
</style>
