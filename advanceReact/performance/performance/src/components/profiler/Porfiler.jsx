// Profiler.jsx
import React, { useCallback, useMemo } from "react";
import Product from "./Product";
import productsData from "./data";
import "../profiler/Profiler.css";
import { slowCountItems } from "./utils";

// import ProductsList from "./ProductList";
const ProductList = React.lazy(() => {
  return import("./ProductList");
});

const Profiler = () => {
  const [count, setCount] = React.useState(0);
  const [showProducts, setShowProducts] = React.useState(false);
  const [sort, setSort] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  const productsCount = useMemo(() => {
    return slowCountItems(productsData, 500);
  }, [productsData]);

  // slowCountItems(productsData, 500);//it slowdown whole app

  // React.useEffect(() => {
  //   console.log("productsData changed");
  // }, [productsData]);

  /**
   * NOTE: I recommend opening the dev tools performance tab and throttling
   * to a 6x slowdown to help highlight the delays that are happening with
   * the expensive "sort" method call on each render.
   */
  // Comment these 4 lines out when testing your solution below
  const startTime1 = Date.now();

  const sortedProducts = useMemo(() => {
    return [...productsData].sort((a, b) => a.name.localeCompare(b.name));
  }, [productsData]);

  const endTime1 = Date.now();
  console.log(`Took ${endTime1 - startTime1}ms`);

  // const startTime2 = Date.now();

  /**
   * Challenge: memoize the sorting calculation of sortedProducts
   * so that it only happens if the value of "sort" changes.
   *
   * Make sure to comment out the version
   * above when testing your version here
   */

  // const endTime2 = Date.now()
  // console.log(`Took ${endTime2 - startTime2}ms`)

  const visibleProducts = sort ? sortedProducts : productsData;

  // const productStyles = {
  //   backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
  //   color: darkMode ? "white" : "#2b283a",
  // };

  const productStyles = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
      color: darkMode ? "white" : "#2b283a",
    };
  }, [darkMode]);

  const selectedStyles = {
    backgroundColor: "#93c47d",
  };

  // function chooseProduct(id) {
  //   console.log("New product selected");
  //   setSelectedProduct(id);
  // }

  const chooseProduct = useCallback(
    (id) => {
      console.log("New product selected");
      setSelectedProduct(id);
    },
    [selectedProduct]
  );
  return (
    <>
      <h1>The current count is {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button
        className="button"
        onClick={() => setShowProducts((prev) => !prev)}
      >
        Show Products
      </button>
      <button className="button" onClick={() => setSort((prev) => !prev)}>
        {sort ? "Unsort" : "Sort"}
      </button>
      <button className="button" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Light" : "Dark"}
      </button>

      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <React.Suspense fallback={<h2>Loading....</h2>}>
        {/* <div className="product-list">
          <h1>🛍️ Products List</h1>
          {showProducts && <ProductList />}
        </div> */}

        {/* {visibleProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            // darkMode={darkMode}
            style={productStyles}
          />
        ))} */}
        {productsData.map((product) => {
          const isSelected = product.id === selectedProduct;
          return (
            <Product
              key={product.id}
              product={product}
              style={
                isSelected
                  ? { ...productStyles, ...selectedStyles }
                  : productStyles
              }
              chooseProduct={setSelectedProduct}
            />
          );
        })}
      </React.Suspense>
    </>
  );
};

export default Profiler;
