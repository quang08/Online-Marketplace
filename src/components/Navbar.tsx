import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import "flowbite";

export function Navbar() {
  const user = useUser();

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Marketplace
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-700 focus:outline-none  focus:ring-2 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg  border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0">
            <li>
              <Link
                href="/"
                className="block rounded py-2 pl-3 pr-4 text-blue-700 hover:bg-blue-700 hover:text-white  md:bg-transparent md:p-0 md:hover:bg-slate-900"
                aria-current="page"
              >
                Browse
              </Link>
            </li>
            {user.isSignedIn && (
              <>
                <li>
                  <Link
                    href="/offers"
                    className="block rounded py-2 pl-3 pr-4 text-blue-700 hover:bg-blue-700  hover:text-white md:bg-transparent md:p-0 md:hover:bg-slate-900"
                    aria-current="page"
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/list-an-item"
                    className="block rounded py-2 pl-3 pr-4 text-blue-700 hover:bg-blue-700  hover:text-white md:bg-transparent md:p-0 md:hover:bg-slate-900"
                    aria-current="page"
                  >
                    Create new listing
                  </Link>
                </li>
              </>
            )}

            {!user.isSignedIn && (
              <li>
                <SignInButton>
                  <span className="block cursor-pointer text-blue-700 hover:text-blue-500">
                    Sign In
                  </span>
                </SignInButton>
              </li>
            )}

            <li className="pl-3 md:pl-0">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
