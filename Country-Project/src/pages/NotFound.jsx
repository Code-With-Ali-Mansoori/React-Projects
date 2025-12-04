import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4">
      
      <h1 className="text-9xl font-extrabold text-gray-700">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 border border-amber-50 hover:bg-gray-700 text-white rounded-xl text-lg transition-all"
      >
        Go back Home
      </Link>
    </div>
  );
}
