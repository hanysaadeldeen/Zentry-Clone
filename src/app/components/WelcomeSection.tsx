"use client";
import MainTitleAnimated from "./MainTitleAnimated";
const WelcomeSection = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-blue-50 py-20 ">
        <span className="block text-center text-black text-xs font-robert-regular uppercase">
          welcome to zentry
        </span>
        <div className="my-7">
          <MainTitleAnimated
            title="Disc<b>o</b>ver the worl<b>d</b>'s <br> largest shar<b>e</b>d <b>a</b>dventure"
            color="black"
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
