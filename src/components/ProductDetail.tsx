import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";
import useLocalStorageState from "use-local-storage-state";

const ProductDetail = () => {
  const { id }: { id?: number } = useParams();
  const [singleProduct, setSingleProduct] = useState<Product>();
  const [myCart, setMycart] = useLocalStorageState<any>('products', {
    defaultValue: []
  });

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(myCart));
  }, [myCart]);

  const getSingleProduct = (): void => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  };

  const addToCart = (): void => {
    setMycart([...myCart, singleProduct]);
  };

  return (
    <>
      <h3>{singleProduct?.title}</h3>
      <div className="singleDetails">Category {singleProduct?.category}</div>
      <div className="singleDescription">{singleProduct?.description}</div>
      <div className="singleImg">
        <img src={singleProduct?.image} alt={singleProduct?.title} />
      </div>
      <div className="singlePrice">Price: {singleProduct?.price}€</div>
      <div className="singleRating">
        Rating score: {singleProduct?.rating.rate}
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </>
  );
};

export default ProductDetail;
