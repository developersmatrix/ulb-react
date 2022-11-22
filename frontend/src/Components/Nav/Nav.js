import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navBarToggled, setNavBarToggled] = useState(false);

  const toggleNavbar = () => {
    setNavBarToggled((prevState) => {
      return !prevState;
    });
  };
  return (
    <div id="root bg-matte w-full">
      <div class="fixed top-0 z-40 w-full sm:h-[3.5rem] bg-matte flex-none transition-colors duration-500 lg:z-50 sm:border-b sm:border-whit dark:border-red-500/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60">
        <header class="max-w-[1440px] sm:px-5 mx-auto flex flex-col sm:flex-row">
          <div class="py-4 sm:py-3 flex justify-center sm:justify-start items-center border-b-2 sm:border-b-0 border-whit">
            <a
              href="/"
              class="flex gap-2 text-whit font-bold tracking-wider uppercase sm:ml-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 centered"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z"
                  clip-rule="evenodd"
                />
              </svg>
              Brand
            </a>
          </div>

          <nav
            className={
              navBarToggled
                ? "pt-3 sm:py-3 max-w-[660px] sm:max-w-none w-full bm:mx-auto z-40 text-whit px-8 sm:bg-transparent  sm:block"
                : "pt-3 sm:py-3 max-w-[660px] sm:max-w-none w-full bm:mx-auto z-40 text-whit px-8 sm:bg-transparent hidden  sm:block"
            }
            id="nav-list"
          >
            <ul class="sm:flex sm:gap-4 sm:justify-end items-center">
              <li class="flex order-5">
                <input
                  type="text"
                  placeholder="search"
                  class="rounded w-[80%] grow px-4 py-1 bg-zinc-200 outline-none text-gray-800"
                />
              </li>
              <li class="flex justify-center">
                <Link
                  class="flex flex-grow justify-start hover:text-white font-bold tracking-wider py-4 sm:py-0"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="flex justify-center">
                <Link
                  class="flex flex-grow justify-start hover:text-white font-bold tracking-wider py-4 sm:py-0"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li class="flex justify-center">
                <Link
                  class="flex flex-grow justify-start hover:text-white font-bold tracking-wider py-4 sm:py-0"
                  href="#"
                >
                  Contact
                </Link>
              </li>
              <li class="flex justify-center">
                <Link
                  class="flex flex-grow justify-start hover:text-white font-bold tracking-wider py-4 sm:py-0"
                  href="#"
                >
                  More
                </Link>
              </li>
              <li class="flex justify-center">
                <Link
                  class="flex flex-grow justify-start hover:text-white font-bold tracking-wider py-4 sm:py-0"
                  to="/mail"
                  onClick={toggleNavbar}
                >
                  Mail
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div
          class={
            navBarToggled
              ? "fixed h-screen w-screen sm:h-full sm:w-full bg-matte backdrop-blur-lg  -z-10  sm:hidden"
              : "fixed h-screen w-screen sm:h-full sm:w-full bg-matte backdrop-blur-lg  hidden sm:hidden"
          }
          onClick={toggleNavbar}
        ></div>
        <svg
          onClick={toggleNavbar}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            navBarToggled
              ? "w-6 h-5 absolute z-50 text-whit font-bold right-4 top-4 hidden sm:hidden cursor-pointer"
              : "w-6 h-5 absolute z-50 text-whit font-bold right-4 top-4  sm:hidden cursor-pointer"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>

        <svg
          onClick={toggleNavbar}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            navBarToggled
              ? "w-6 h-5 absolute z-50 text-whit font-bold right-4 top-4  sm:hidden cursor-pointer"
              : "w-6 h-5 absolute z-50 text-whit font-bold right-4 top-4 hidden sm:hidden cursor-pointer"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
