import {
  createWebHistory,
  createRouter
} from 'vue-router';
import CatalogPage from './components/Catalog-Products/CatalogPage.vue';
import ProductCard from './components/Catalog-Products/ProductCard.vue';
import PromoPage from './components/Main/PromoPage.vue';
import Basket from './components/Header/Basket.vue';

const parseProductProp = (route) => ({
  productId: route.params.productId
});

const routes = [
  {
    name: 'promo',
    component: PromoPage,
    children: [
      {
        path: '/basket',
        component: Basket
      }
    ]
  },
  {
    name: 'catalog',
    path: '/catalog',
    component: CatalogPage,
    children: [
      {
        path: '/basket',
        component: Basket
      }
    ]
  },
  {
    name: 'product',
    path: '/catalog/:productId',
    component: ProductCard,
    props: parseProductProp,
    children: [
      {
        path: '/basket',
        component: Basket
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
