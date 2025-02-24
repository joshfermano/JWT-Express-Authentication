import { useAuth } from '../context/AuthProvider';

const Homepage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Homepage</h1>
      {user ? (
        <div>
          <p>You are logged in!</p>
          <p className="text-gray-600">Your token: {user.token}</p>
        </div>
      ) : (
        <p>Please log in to access protected content</p>
      )}
    </div>
  );
};

export default Homepage;
