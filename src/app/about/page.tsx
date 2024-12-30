import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { CardMedia } from "@mui/material";
import Card from '@mui/material/Card';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Glassbox AI",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="With expertise spanning technology, data science, and industry-specific knowledge, we collaborate closely to deliver tailored solutions that meet our clients' unique needs."
      />
      <Team/>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
