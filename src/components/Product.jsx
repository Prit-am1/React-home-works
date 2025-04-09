export default function ProductCard({ title, price, image }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        margin: "10px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}
