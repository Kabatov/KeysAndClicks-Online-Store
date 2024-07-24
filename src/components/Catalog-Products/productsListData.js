import uniqid from 'uniqid';

export const productsListData = [
  {
    id: uniqid(),
    name: 'Продукт 1',
    description: 'Описание продукта 1',
    price: 100
  },
  {
    id: uniqid(),
    name: 'Продукт 2',
    description: 'Описание продукта 2',
    price: 150
  },
  {
    id: uniqid(),
    name: 'Продукт 3',
    description: 'Описание продукта 3',
    price: 200
  },
  {
    id: uniqid(),
    name: 'Продукт 4',
    description: 'Описание продукта 4',
    price: 250
  },
  {
    id: uniqid(),
    name: 'Продукт 5',
    description: 'Описание продукта 5',
    price: 300
  },
  {
    id: uniqid(),
    name: 'Продукт 6',
    description: 'Описание продукта 6',
    price: 350
  }
];

console.log(uniqid());
