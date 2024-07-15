<template>
    <form
        class="header__search-form"
        @submit.prevent
    >
        <input
            class="header__search-input"
            v-model="searchPeripher.peripher"
            placeholder="Клавиатура Varmilo"
            type="text"
        >
        <button
            class="header__search-button"
            @click="searchButton"
        >
            Найти
        </button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      searchPeripher: {
        peripher: ''
      }
    };
  },

  methods: {
    searchButton() {
      this.searchPeripher.id = Date.now();
      this.searchPeripher = {
        peripher: ''
      };
      console.log('Найдена переферия');
    }
  }
};
</script>

<style>

</style>
