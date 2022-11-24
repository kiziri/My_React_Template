import {observable} from "mobx";


const marketHome = observable({

  selectedProducts : [],
  put(productName, productPrice) {
    const exists = this.selectedProducts.find((product) => product.productName === productName);
    if (!exists) {
      this.selectedProducts.push({
        productName,
        productPrice,
        productCount: 1,
      });
      return;
    }
    exists.productCount++;
  },


});
export { marketHome };
