<template>
    <header class="header">
        <NavigationItems />
        <div class="header__search">
            <SearchForm />
            <a
                href="#"
                class="header__search-basket"
            >
                Корзина
            </a>
        </div>
    </header>
</template>

<script>
import NavigationItems from './NavigationItems.vue';
import SearchForm from './SearchForm.vue';

export default {
  components: {
    NavigationItems,
    SearchForm
  }
};
</script>

<style lang="scss">
.header {
    padding: 30px;
    display: flex;
    background-color: white;

    &__search {
      display: flex;
      justify-content: end;
    }

    &__search-input {
      font-size: 15px;
      height: 30px;
      border-radius: 30px;
      padding-left: 10px;
    }

    &__search-button {
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

    &__search-basket {
      padding-left: 10px;
    }
}
</style>
