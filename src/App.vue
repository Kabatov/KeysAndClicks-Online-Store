<template>
    <div class="container">
        <HeaderMenu />
        <MainMenu />
        <FooterMenu />
    </div>
</template>

<script>
import HeaderMenu from './components/Header/HeaderMenu.vue';
import MainMenu from './components/Main/MainMenu.vue';
import FooterMenu from './components/Footer/FooterMenu.vue';

export default {
  components: {
    HeaderMenu,
    MainMenu,
    FooterMenu
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
    background-color: #EEECE7;
}
</style>
