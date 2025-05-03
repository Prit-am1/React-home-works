import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "Galaxy S23" },
    { id: 3, name: "Pixel 8" },
  ];
  return (
    <>
      <h2>This is the Products Page</h2>
      <ul>
      {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
