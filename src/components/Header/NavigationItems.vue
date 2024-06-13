<template>
    <nav class="navigation">
        <ul class="navigation__items">
            <li class="navigation__item"
                v-for="item in links"
                :key="item.link"
            >
                <a :href="item.link"
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

<style>

</style>
