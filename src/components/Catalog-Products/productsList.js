import uniqid from 'uniqid';

export const productsList = [
  {
    id: uniqid(),
    name_product: 'Продукт 1',
    description_product: 'Описание продукта 1',
    price: 100
  },
  {
    id: uniqid(),
    name_product: 'Продукт 2',
    description_product: 'Описание продукта 2',
    price: 150
  },
  {
    id: uniqid(),
    name_product: 'Продукт 3',
    description_product: 'Описание продукта 3',
    price: 200
  },
  {
    id: uniqid(),
    name_product: 'Продукт 4',
    description_product: 'Описание продукта 4',
    price: 250
  },
  {
    id: uniqid(),
    name_product: 'Продукт 5',
    description_product: 'Описание продукта 5',
    price: 300
  },
  {
    id: uniqid(),
    name_product: 'Продукт 6',
    description_product: 'Описание продукта 6',
    price: 350
  }
];

console.log(uniqid());
