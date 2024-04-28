import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
const ContinentPage = lazy(() => import("./pages/ContinentPage"));
import NotFoundPage from "./pages/NotFoundPage";
import { loader as stationsLoader } from "./pages/ContinentPage";
import { queryClient } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":continent",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <CircularProgress />
              </div>
            }
          >
            <ContinentPage />
          </Suspense>
        ),
        loader: stationsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
