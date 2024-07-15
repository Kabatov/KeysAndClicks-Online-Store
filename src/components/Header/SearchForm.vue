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

<script setup>
import { reactive } from 'vue';

const searchPeripher = reactive({
  peripher: '',
  id: null
});

const searchButton = () => {
  searchPeripher.id = Date.now();
  console.log('Найдена переферия', searchPeripher);
};
</script>

<style>

</style>
