import React from 'react';
import SuperMarketTemplate from './view/SuperMarketTemplate';
import ShopProductList from "./view/ShopProductList";
import BasketProductList from "./view/BasketProductList";


const HomeMainListContentContainer = () => {
  return <SuperMarketTemplate products={<ShopProductList />} basket={<BasketProductList />} />;
};

export default HomeMainListContentContainer;
