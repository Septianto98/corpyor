const ChooseUs = () => {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a] py-20 md:py-0 md:pt-75 md:pb-50 px-4 md:px-30 overflow-hidden">
      <div className="realtive flex flex-col h-fit py-20 md:py-32 md:w-[570px]">
        <h2 className="font-inter text-lg tracking-lg leading-[130%] md:text-xl md:tracking-xl md:leading-[140%] text-whitebase">
          We don't just offer digital marketing, website development, or design.
          <br />
          We provide a holistic approach that ensures your brand thrives online.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row h-full justify-between items-start w-full gap-10 ">
        <p className="font-inter text-base w-100 text-whitebase font-normal order-2 md:order-1">
          We pride ourselves on our expert team with diverse skills, a
          collective of seasoned professionals from various digital disciplines.
          <br />
          <br /> We maintain open lines of dialogue, providing regular updates,
          detailed explanations, and welcoming your input at every stage. <br />
          <br />
          We meticulously analyze your market, audience, and goals to develop
          custom-fit campaigns across all digital touchpoints. <br /> <br />
          Our strategies are powered by data-driven decision-making, ensuring
          every action we take is informed and impactful.
        </p>
        <img
          src="/src/assets/img3.webp"
          className="object-cover h-[450px] w-full md:w-[400px] rounded-xl order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default ChooseUs;
