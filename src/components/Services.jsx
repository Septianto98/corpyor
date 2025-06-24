import { useState } from "react";
import DetailServices from "./DetailServices";
import img4 from "../assets/image4.webp";

const dataServices = [
  {
    id: 1,
    service: "Digital Marketing",
    detailservice:
      "We believe every business is unique. That's why we offer personalized digital marketing solutions, ranging from search engine optimization to interactive social media management. Let's grow together.",
  },
  {
    id: 2,
    service: "Branding",
    detailservice:
      "We believe a strong brand starts with a solid strategy. Our research-driven approach ensures your brand identity resonates with your audience and stands the test of time. Let us architect your success.",
  },
  {
    id: 3,
    service: "Web design & development",
    detailservice:
      "We don't just build websites, We craft powerful results-driven digital experiences for your business. We understand that your website is the heart of your online presence, and we're dedicated to ensuring it not only looks fantastic but also functions flawlessly and drives business growth.",
  },
  {
    id: 4,
    service: "Marketing Automation",
    detailservice:
      "Stop guessing, start knowing. We utilize the power of data within Marketing Automation platforms to continuously optimize your campaigns, improve ROI, and achieve sustainable growth.",
  },
];

const Services = () => {
  const [showSelectedS, setShowSelectedS] = useState(null);

  const showService = (index) => {
    setShowSelectedS(index === showSelectedS ? null : index);
  };

  return (
    <div
      className="relative flex flex-col gap-20 bg-[#f2f2f2] md:gap-40 md:flex-row min-h-screen
    items-center justify-center px-4 md:px-30 py-10 md:py-20 overflow-x-hidden"
    >
      <img
        src={img4}
        loading="lazy"
        className="w-full h-full md:w-[391px] md:h-[341px] object-cover"
      />
      <div className="w-full h-full bg-white px-10 py-10 rounded-2xl">
        {dataServices.map((d, index) => {
          return (
            <DetailServices
              key={d.id}
              dataServices={d}
              onClick={() => showService(index)}
              isOpen={showSelectedS === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
