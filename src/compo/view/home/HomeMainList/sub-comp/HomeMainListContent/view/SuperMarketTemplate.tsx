import React from "react"
import '../MainListstyle.css'

interface Props {
  products: any;
  basket: any;
}

const SuperMarketTemplate = ({ products, basket }: Props) => {
  return (
    <div>
      <div className="SuperMarketTemplate">
        <div className="products-wrapper">
          <h2>상품</h2>
          {products}
        </div>
        <div className="basket-wrapper">
          <h2>장바구니</h2>
          {basket}
        </div>
      </div>
    </div>
  );
};
export default SuperMarketTemplate;
