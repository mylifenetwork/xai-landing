import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Glassbox AI",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to elevate your enterprise with AI? Contact us for a free consultation and discover how our customized solutions can transform your business."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
