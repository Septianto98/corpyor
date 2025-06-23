import picturebg from "../assets/bgourteam.webp";
import iconarrow from "../assets/arrow.svg";
import Button from "./Button";

const OurTeam = () => {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-hidden ">
      <div className="relative flex h-screen justify-center items-center">
        <div className="relative z-10 md:h-[210px] md:w-[700px] text-center flex flex-col h-full w-full  justify-center items-center px-4">
          <span className="text-white font-inter text-base leading-[150%] md:text-lg md:leading-[140%] md:tracking-lg align-middle pb-5 md:pb-10">
            At Corpyor, our team's positive energy fuels your digital success.
            Collaborate with our friendly experts in the digital marketing
            realm.
          </span>
          <Button
            paddingx="px-6"
            title="Join our team"
            icon={iconarrow}
            bgcolor="bg-primary"
            textcolor="text-white"
          />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#1a1a1a] from-50% to-[#1a1a1a]/10 blur-xs opacity-70" />
          <img
            src={picturebg}
            loading="lazy"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
