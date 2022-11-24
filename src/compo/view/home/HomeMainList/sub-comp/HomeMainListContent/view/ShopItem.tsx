import React from "react"
import "../MainListstyle.css"

interface Props {
  productName: string;
  productPrice: number;
}

const ShopItem = ({ productName, productPrice }: Props) => {
  return (
    <div>
      <div className="ShopProduct">
        <h4>{productName}</h4>
        <div>{productPrice}원</div>
      </div>
    </div>
  );
};
export default ShopItem;
