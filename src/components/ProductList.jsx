import ProductCard from "./Product";

const products = [
  {
    title: "Laptop",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Smartphone",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Headphones",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProductList() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
