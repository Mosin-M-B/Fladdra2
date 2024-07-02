
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { Client } from "../Components/ClientofCompany/Client";
import { Section2 } from "../Components/Section2/Section2";
import { TabSection } from "../Components/TabSection/TabSection";
import { SectionOne } from "../Components/Section/SectionOne";
import { ArrSectionOne } from '../Components/Section/sectionOne.js'
import { ThinkFuture } from "../Components/ThinkFuture/ThinkFuture.jsx";
export const LandingPage = () => {
  return (  
    <>
     
      <HeroSection />
      <Client />
      <SectionOne h2={ArrSectionOne.h2} h3={ArrSectionOne.h3} para={ArrSectionOne.para}/>
      <TabSection/>
      <Section2 />
      <ThinkFuture/>
    </>
  );
};
