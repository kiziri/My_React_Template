import React from "react"
import "../MainListstyle.css"

interface Props {
  productName: string;
  productPrice: number;
  productCount: number;
}

const BasketItem = ({ productName, productPrice, productCount }: Props) => {
  return (
    <div className="BasketProduct">
      <div className="productName">{productName}</div>
      <div className="productPrice">{productPrice}</div>
      <div className="productCount">{productCount}</div>
      <div className="productReturn">돌려놓기</div>
    </div>
  );
};
export default BasketItem;
