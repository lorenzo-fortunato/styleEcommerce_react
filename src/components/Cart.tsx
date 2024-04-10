import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import useLocalStorageState from "use-local-storage-state";

const Cart = () => {
  const [cart, setCart] = useLocalStorageState<any>("products");
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
    setCart([]);
    alert("You have paid!");
  }

  return (
    <>
      { isPending && <div>Loading cart...</div> }
      { cart.map((product: any, index: any) => (
        <div className="productCartDetails" key={ index }>
          <h5>Title: { product.title }</h5>
          <span>Rating: { product.rating.rate }</span>
          <span>Price: { product.price }€</span>
          <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        </div>
      )) }
      <div>Total: { totalPrice }€</div>
      <button onClick={goToPayment}>Go to Payment</button>
    </>
  );
};

export default Cart;
