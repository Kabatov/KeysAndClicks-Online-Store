import {
  createWebHistory,
  createRouter
} from 'vue-router';
import CatalogPage from './components/Catalog-Products/CatalogPage.vue';
import ProductCard from './components/Catalog-Products/ProductCard.vue';
import PromoPage from './components/Main/PromoPage.vue';

const routes = [
  { path: '/', component: PromoPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/catalog/:product-id', component: ProductCard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
