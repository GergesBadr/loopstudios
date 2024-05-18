import interactiveImgDesktop from "../assets/desktop/interactive.jpg";
import interactiveImgMobile from "../assets/mobile/interactive.jpg";

function InteractiveVR() {
  return (
    <section className="responsive-container my-28">
      <div className="grid grid-cols-1 items-end md:grid-cols-2">
        <img
          src={interactiveImgMobile}
          alt="fake alternate text for the image"
          loading="lazy"
          className="sm:hidden"
        />
        <img
          src={interactiveImgDesktop}
          alt="fake alternate text for the image"
          loading="lazy"
          className="hidden h-full w-full sm:block"
        />

        <div className="mx-auto max-w-xl space-y-6 px-12 py-8 text-center md:-mb-8 md:-ml-44 md:bg-white md:text-left lg:max-w-2xl lg:px-24 lg:py-12">
          <h2 className="heading-2 font-medium uppercase leading-tight tracking-widest md:font-light">
            The leader in <br /> interactive VR
          </h2>
          <p className="text-lg leading-relaxed text-gray-500 md:text-base">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InteractiveVR;
