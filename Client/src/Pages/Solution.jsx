import "./Solution.css";
import {Section2} from '../Components/Section2.2/Section2'
import { SectionOne } from "../Components/Section/SectionOne";
import { Arrowbutton } from "../Components/Arrow Button/Arrowbutton";
import { ArrSectionTwo } from "../Components/Section/sectionOne.js";
import { OurSolution } from "../Components/OurSolution/OurSolution.jsx";
import {Cards} from '../Components/Card/Cards.jsx'
export const Solution = () => {
  return (
    <>
      <div className="SolutionHero">
        <div className="SolutionContent">
          <h1>
            Unlock the Potential.
            <br />
            Harness the Power.
            <br />
            Embrace the Future.
          </h1>
          <p>
            We use data, cloud, and AI to help innovative companies find new
            business opportunities, make smart decisions, and drive business
            impact.
          </p>
          <Arrowbutton name={"GO Fladdra Today"} />
        </div>
      </div>

      <SectionOne
        h2={ArrSectionTwo.h2}
        h3={ArrSectionTwo.h3}
        para={ArrSectionTwo.para}
      />
      <OurSolution />
      <Section2/>
    </>
  );
};
