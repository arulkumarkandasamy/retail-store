import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Retail Store</Link>
        <nav>
          <Link to="/products" className="mx-2">Products</Link>
          <Link to="/cart" className="mx-2">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;