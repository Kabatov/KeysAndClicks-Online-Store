import {
  createWebHistory,
  createRouter
} from 'vue-router';
import CatalogPage from './components/Catalog-Products/CatalogPage.vue';
import ProductCard from './components/Catalog-Products/ProductCard.vue';
import PromoPage from './components/Main/PromoPage.vue';
import ListItemsBasket from './components/Header/ListItemsBasket.vue';

const parseProductProp = (route) => ({
  productId: route.params.productId
});

const routes = [
  {
    path: '/',
    component: PromoPage,
    children: [
      {
        name: 'basket',
        path: '/basket',
        component: ListItemsBasket
      }
    ]
  },
  {
    name: 'catalog',
    path: '/catalog',
    component: CatalogPage
  },
  {
    name: 'product',
    path: '/catalog/:productId',
    component: ProductCard,
    props: parseProductProp,
    children: [
      {
        name: 'basket',
        path: '/basket',
        component: ListItemsBasket
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
