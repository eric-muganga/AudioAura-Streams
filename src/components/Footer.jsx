import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full fixed inset-x-0 bottom-0 bg-white p-6 border-t border-blue-gray-50">
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024{" "}
        <a
          href="https://github.com/eric-muganga"
          target="_blank"
          rel="noopener noreferrer" // Important for security when opening a new tab
          className="hover:underline"
        >
          Eric Muganga
        </a>{" "}
        | All rights reserved
      </Typography>
    </footer>
  );
}
