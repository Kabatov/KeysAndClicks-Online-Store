<template>
    <div class="container">
        <SiteHeader />
        <PromoPage />
        <SiteFooter />
    </div>
</template>

<script>
import SiteHeader from './components/Header/SiteHeader.vue';
import PromoPage from './components/Main/PromoPage.vue';
import SiteFooter from './components/Footer/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    PromoPage,
    SiteFooter
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
