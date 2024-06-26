import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/Product";
import useLocalStorageState from "use-local-storage-state";

const ProductList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [myCart, setMycart] = useLocalStorageState<any>('products', {
    defaultValue: []
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  const fetchData = (url: string) => {
    const abortCont: any = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw "Cannot fetch data for that resource";
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return (): void => abortCont.abort();
  };

  const getAllProducts = (): void => {
    fetchData("https://fakestoreapi.com/products");
  };

  const getProductsPerCategory = (value: string): void => {
    fetchData(`https://fakestoreapi.com/products/category/${value}`);
  };

  const handleSelection = (): void => {
    const selection = document.querySelector(".category") as HTMLSelectElement;
    const value: string = selection.value;
    if (value == "all") {
      getAllProducts();
    } else {
      getProductsPerCategory(value);
    }
  };

  const addToCart = (id: number): void => {
   let singleProduct: Product[] = data.filter(e => e.id == id);
    setMycart([...myCart, ...singleProduct]);
  };

  return (
    <>
      <div className="categoryDiv">
      <span>Choose your category: </span>
        <select className="category" onChange={handleSelection}>
          <option className="allCategory" value="all">
            All
          </option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      <ul className="productList">
        { error && <div>{error}</div> }
        { isPending && <div>Loading products...</div> }
        { data &&
          data.map((product: Product) => {
            return (
                <li className="productItem" key={product.id}>
                  <Link to={`/products/${product.id}`} className="productStyle">{product.title}</Link>
                  <p className="productStyle">
                    Category: {product.category}
                  </p>
                  <img src={product.image} />
                  <button className="btnAddToCart" onClick={() => addToCart(product.id)}>Add to cart</button>
                </li>
            )
          }) }
      </ul>
    </>
  );
};

export default ProductList;
