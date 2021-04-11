import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "opening hours",
    description: "We Are Open 7 Days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Dhaka,Bangladesh",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+8801765341047",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
