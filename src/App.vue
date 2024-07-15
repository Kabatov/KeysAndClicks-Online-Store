<template>
    <div class="keys-and-clicks">
        <Header />
        <PromoPage />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import PromoPage from './components/Main/PromoPage.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  components: {
    Header,
    PromoPage,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', sans-serif;
}

.keys-and-clicks {
  background-color: #EEECE7;
}
</style>
