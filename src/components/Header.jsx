import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Logo from "./Logo";

function Header() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const links = [
    { id: 1, name: "About", to: "#about" },
    { id: 2, name: "Careers", to: "#careers" },
    { id: 3, name: "Events", to: "#events" },
    { id: 4, name: "Products", to: "#products" },
    { id: 5, name: "Support", to: "#support" },
  ];

  return (
    <header className="absolute left-0 top-0 z-[1] w-full">
      <nav className="responsive-container flex items-center justify-between py-8">
        <Logo />

        <button
          className="z-[2] flex items-center justify-center rounded-lg p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden"
          aria-expanded={isOpenNavbar}
          onClick={() => setIsOpenNavbar((pre) => !pre)}
        >
          <span className="sr-only">Open main navigation</span>
          <HiBars3BottomLeft className="size-8 text-white" />
        </button>

        <div
          className={`absolute top-0 h-screen w-full bg-black duration-300 md:relative md:left-0 md:h-auto md:w-auto md:bg-transparent ${isOpenNavbar ? " left-0" : "-left-[100%] md:left-0"}`}
        >
          <ul className="flex h-full flex-col justify-center gap-6 px-8 text-white md:flex-row">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.to}
                    className="md block text-lg font-light uppercase tracking-widest text-gray-200 duration-300 md:font-medium md:capitalize md:tracking-normal md:hover:-translate-y-1 md:hover:text-gray-400"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
