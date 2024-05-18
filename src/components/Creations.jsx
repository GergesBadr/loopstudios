import deepEarthDesktop from "../assets/desktop/deep-earth.jpg";
import nightArcadeDesktop from "../assets/desktop/night-arcade.jpg";
import soccerTeamDesktop from "../assets/desktop/soccer-team.jpg";
import gridDesktop from "../assets/desktop/grid.jpg";
import fromAboveDesktop from "../assets/desktop/from-above.jpg";
import pocketBorealisDesktop from "../assets/desktop/pocket-borealis.jpg";
import curiosityDesktop from "../assets/desktop/curiosity.jpg";
import fisheyeDesktop from "../assets/desktop/fisheye.jpg";

import deepEarthMobile from "../assets/mobile/deep-earth.jpg";
import nightArcadeMobile from "../assets/mobile/night-arcade.jpg";
import soccerTeamMobile from "../assets/mobile/soccer-team.jpg";
import gridMobile from "../assets/mobile/grid.jpg";
import fromAboveMobile from "../assets/mobile/from-above.jpg";
import pocketBorealisMobile from "../assets/mobile/pocket-borealis.jpg";
import curiosityMobile from "../assets/mobile/curiosity.jpg";
import fisheyeMobile from "../assets/mobile/fisheye.jpg";

function Creations() {
  const creationsList = [
    {
      id: 1,
      text: "Deep earth",
      imgDesktop: deepEarthDesktop,
      imgMobile: deepEarthMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 2,
      text: "Night arcade",
      imgDesktop: nightArcadeDesktop,
      imgMobile: nightArcadeMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 3,
      text: "Soccer team VR",
      imgDesktop: soccerTeamDesktop,
      imgMobile: soccerTeamMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 4,
      text: "The grid",
      imgDesktop: gridDesktop,
      imgMobile: gridMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 5,
      text: "From up above VR",
      imgDesktop: fromAboveDesktop,
      imgMobile: fromAboveMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 6,
      text: "Pocket borealis",
      imgDesktop: pocketBorealisDesktop,
      imgMobile: pocketBorealisMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 7,
      text: "The curiosity",
      imgDesktop: curiosityDesktop,
      imgMobile: curiosityMobile,
      imgAlt: "fake alternate text for the image",
    },
    {
      id: 8,
      text: "Make it fisheye",
      imgDesktop: fisheyeDesktop,
      imgMobile: fisheyeMobile,
      imgAlt: "fake alternate text for the image",
    },
  ];

  return (
    <section className="responsive-container mb-24">
      <div className="flex items-center justify-center sm:justify-between">
        <h2 className="heading-2 font-medium uppercase leading-tight tracking-widest md:font-light">
          Our creations
        </h2>
        <button className="hidden border border-black px-10 py-2 uppercase tracking-widest duration-200 hover:bg-gray-800 hover:text-gray-100 sm:block">
          See all
        </button>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-4 ">
        {creationsList.map((item) => {
          return (
            <li key={item.id}>
              <button className="group relative h-full w-full overflow-hidden text-left">
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20 to-transparent duration-200 group-hover:bg-white/60 group-hover:from-transparent group-hover:via-transparent"></div>
                <p className="absolute bottom-6 left-6 text-xl font-light uppercase tracking-widest text-white duration-200 group-hover:font-medium group-hover:text-gray-700 md:text-2xl">
                  {item.text.split(" ").at(0)}
                  <br />
                  {item.text.split(" ").at(1)}
                </p>
                <img
                  src={item.imgMobile}
                  alt={item.imgAlt}
                  loading="lazy"
                  className="sm:hidden"
                />
                <img
                  src={item.imgDesktop}
                  alt={item.imgAlt}
                  loading="lazy"
                  className="hidden h-full w-full object-cover object-center sm:block"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <button className="mx-auto mt-10 block border border-black px-10 py-2 uppercase tracking-widest duration-200 hover:bg-gray-800 hover:text-gray-100 sm:hidden">
        See all
      </button>
    </section>
  );
}

export default Creations;
