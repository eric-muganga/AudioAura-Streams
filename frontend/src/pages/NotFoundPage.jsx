import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg mt-4">
        <i>{error.statusText || error.message}</i>
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

export default ErrorPage;
