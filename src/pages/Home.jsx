import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Retail Store</h1>
      <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;