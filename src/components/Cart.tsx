import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import useLocalStorageState from "use-local-storage-state";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState<any>('products', {
    defaultValue: []
  });
  const [isPending, setIsPending] = useState<boolean>(true);

  useEffect(() => {
    setIsPending(false);
    getProducts();
  }, []);

  const getProducts = (): Array<Product> => {
    return Object.values(cart || {});
  };

  const totalPrice: number = cart.reduce((accumulator: any, product: { price: any; }) => accumulator + product.price, 0);

  const removeFromCart = (id: number): void => {
    setCart(getProducts().filter(e => e.id != id));
  }

  const goToPayment = (): void => {
    if (totalPrice == 0) {
      alert("Nothing to pay!");
    } else {
      setCart([]);
      alert("You have paid!");
    }
  }

  return (
    <>
      { isPending && <div>Loading cart...</div> }
      { cart.map((product: any, index: any) => (
        <div className="productCartDetails" key={ index }>
          <h5 className="cartItem">Title: { product.title }</h5>
          <span className="cartItem">Rating: { product.rating.rate }</span>
          <span className="cartItem">Price: { product.price }€</span>
          <button className="btnRemoveFromCart" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        </div>
      )) }
      <div className="totalAmount">Total: { totalPrice }€</div>
      <div className="payment">
        <button className="btnGoToPayment" onClick={goToPayment}>Go to Payment</button>
      </div>
    </>
  );
};

export default Cart;
