<template>
    <div class="footer-info__column">
        <h4 class="footer-info__text">{{ title }}</h4>
        <ul class="footer-info__list">
            <li class="footer-info__item"
                v-for="item in links"
                :key="item.link"
            >
                <a class="footer-info__link"
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

<style>
.footer-info__list {
    list-style-type: none;
}

.footer-info__text {
    color: #696969;
    margin-bottom: 12px;
    font-size: 18px;
}

.footer-info__link {
    text-decoration: none;
    color: white;
}
</style>
