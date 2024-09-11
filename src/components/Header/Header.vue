<template>
    <header class="header">
        <NavigationItems />
        <!-- <ListItemsBasket /> -->
        <div class="header__search">
            <SearchForm />
            <router-link
                :to="{name: 'basket'}"
                class="header__search-basket"
            >
                Корзина
            </router-link>
        </div>
    </header>
</template>

<script>
/* import ListItemsBasket from './ListItemsBasket.vue'; */
import NavigationItems from './NavigationItems.vue';
import SearchForm from './SearchForm.vue';

export default {
  components: {
    NavigationItems,
    SearchForm
    /* ListItemsBasket */
  }
};
</script>

<style lang="scss">
.header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
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
