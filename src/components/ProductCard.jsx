import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 mt-2 block">View Details</Link>
    </div>
  );
}

export default ProductCard;