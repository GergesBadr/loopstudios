import heroImgDesktop from "../assets/desktop/hero.jpg";
import heroImgMobile from "../assets/mobile/hero.jpg";

function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 flex items-center justify-center bg-[rgb(0,0,0,35%)] text-white sm:justify-start">
        <h1 className="heading-1 responsive-container border border-white px-10 py-5 font-thin uppercase leading-tight tracking-widest">
          Immersive <br /> experiences <br /> that deliver
        </h1>
      </div>

      <img
        src={heroImgMobile}
        alt="fake alternate text for the image"
        className="max-h-[800px] w-full object-cover object-top sm:hidden"
      />

      <img
        src={heroImgDesktop}
        alt="fake alternate text for the image"
        className="hidden min-h-[600px] w-full object-cover object-center sm:block"
      />
    </section>
  );
}

export default HeroSection;
