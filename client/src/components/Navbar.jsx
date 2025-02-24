import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Auth System
        </Link>
        <div className="space-x-4">
          {user ? (
            <button onClick={logout} className="text-white hover:text-gray-300">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
