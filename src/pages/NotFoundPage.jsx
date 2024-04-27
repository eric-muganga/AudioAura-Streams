import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-2">
        You can always go back to the{" "}
        <Link to="/" className="text-blue-600 hover:underline">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
