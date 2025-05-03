import { useParams } from "react-router-dom";

function Productdetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      {/* You can fetch product details using this ID */}
    </div>
  );
}

export default Productdetails;