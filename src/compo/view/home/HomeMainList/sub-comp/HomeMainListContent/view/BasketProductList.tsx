import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => {
  return (
    <div>
      <BasketItem productName="포카칩" productPrice={1500} productCount={2} />
      <BasketItem productName="생수" productPrice={850} productCount={1} />
      <hr />
      <p>
        <b>총합: </b> 3850원
      </p>
    </div>
  );
};

export default BasketItemList;
