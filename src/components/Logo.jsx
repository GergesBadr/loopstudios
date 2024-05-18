import logoImg from "../assets/logo.svg";

function Logo() {
  return (
    <a href="#" className="z-[2] w-40 shrink-0 md:w-60">
      <img
        src={logoImg}
        alt="loopstudios, logo, homepage link."
        loading="lazy"
      />
    </a>
  );
}

export default Logo;
