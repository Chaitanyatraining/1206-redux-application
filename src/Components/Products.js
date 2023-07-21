import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <>
      <div className="bg-lightgrey">
        <div className="container">
         {products && products.length > 0  ? (
            <div className="row">
                <h2 className="text-center py-3">Products</h2>
                {
                products.map((product) => (
                    <div className="col-md-3">
                        <div className="card shadow-lg mt-2 p-1">
                            <div className="img-size text-center">
                                <img src={product.image} className="img-fluid h-100" alt={product.title} />
                            </div>
                            <div className="card-body ">
                                <h5>{product.category}</h5>
                        
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        ) : (
          <p>Add Products</p>
        )}
      </div>
      </div>
    </>
  );
};
export default Products;
