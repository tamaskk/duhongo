import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import { InlineWidget } from "react-calendly";

import styled from "styled-components";

const ResponsiveWidget = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;

  @media screen and (max-width: 100px) {
    margin-top: 100px;
  }
`;

const idopont = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Nav />
      <h1 className="text-3xl font-bold text-center mt-20">
        Foglalj időpontot most!
      </h1>
      <div className="w-screen max-sm:mt-14 max-sm:w-[90%] h-full">
        <InlineWidget
          utm={{
            utmCampaign: "spring_sale",
            utmContent: "bottom_link",
            utmMedium: "ad",
            utmSource: "facebook",
            utmTerm: "spring",
          }}
          iframeTitle="Schedule a meeting"
          styles={{
            width: "100%",
            height: "800px",
            overflow: "hidden",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          url="https://calendly.com/csalad53/idopont-valaszto"
        />
      </div>
      <Footer />
    </div>
  );
};

export default idopont;
