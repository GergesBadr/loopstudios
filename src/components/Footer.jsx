import Logo from "./Logo";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookSquare className="size-full" />,
    },
    { id: 2, name: "Twitter", icon: <FaTwitter className="size-full" /> },
    { id: 3, name: "Pinterest", icon: <FaPinterest className="size-full" /> },
    { id: 4, name: "Instagram", icon: <FaInstagram className="size-full" /> },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-6 bg-black/95 px-6 py-10 text-white">
      <div>
        <Logo />
      </div>

      <ul className="flex items-center gap-4">
        {socialMedia.map((item) => {
          return (
            <li key={item.id}>
              <a
                href="#"
                aria-label={item.name}
                className="block size-8 duration-200 hover:rotate-12"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-lg text-gray-400">
        &copy; Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
