<template>
    <header class="container-header">
        <NavigationItems :links="navigations" />
        <div class="search">
            <form
                class="search__peripher"
                @submit.prevent
            >
                <input
                    class="search__peripher_input"
                    v-model="searchPeripher.peripher"
                    placeholder="Клавиатура Varmilo"
                    type="text"
                >
                <button
                    class="search__peripher_button"
                    @click="searchButton"
                >
                    Найти
                </button>
            </form>
            <a
                href="#"
                class="search__basket"
            >
                Корзина
            </a>
        </div>
    </header>
</template>

<script>
import NavigationItems from './NavigationItems.vue';

export default {
  components: {
    NavigationItems
  },

  data() {
    return {
      searchPeripher: {
        peripher: ''
      },

      navigations: [
        { link: '#', name: 'Логотип' },
        { link: '#', name: 'Что нового?' },
        { link: '#', name: 'Магазин' },
        { link: '#', name: 'Re-sale🔥' },
        { link: '#', name: 'Предзаказ' },
        { link: '#', name: 'База знаний' },
        { link: '#', name: 'Дополнительная информация' }
      ]
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

<style lang="scss">
.container-header {
    padding: 30px;
    display: flex;
    background-color: white;
}

.search {
    display: flex;
    justify-content: end;

    &__basket {
      padding-left: 10px;
    }

    &__peripher_button {
      font-family: 'Franklin Gothic Medium', sans-serif;
      font-size: 15px;
      height: 30px;
      width: 60px;
      border-radius: 30px;
      border: 1px solid white;
      background-color: #6495ED;
      color: white;
      margin-left: 10px;
      cursor: pointer;
    }

    &__peripher_input {
      font-family: 'Franklin Gothic Medium', sans-serif;
      font-size: 15px;
      height: 30px;
      border-radius: 30px;
      padding-left: 10px;
    }
}
</style>
