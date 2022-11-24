import React from 'react';
import ShopItem from './ShopItem';

const products = [
  {
    productName: '생수',
    productPrice: 850,
  },
  {
    productName: '신라면',
    productPrice: 900,
  },
  {
    productName: '포카칩',
    productPrice: 1500,
  },
  {
    productName: '새우깡',
    productPrice: 1000,
  },
];

const ShopItemList = () => {
  const productList = products.map(product => <ShopItem {...product} key={product.productName} />);
  return <div>{productList}</div>;
};

export default ShopItemList;
