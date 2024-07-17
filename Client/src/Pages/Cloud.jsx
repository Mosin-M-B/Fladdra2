import HeroSolution from '../Components/HeroPageForSolutions/HeroSolution'
import {SolutionHeroData} from '../Components/HeroPageForSolutions/Solutions.js'
import { Section3Data } from '../Components/Section3/Section3.js'
import Section3 from '../Components/Section3/Section3.jsx'
import CoreCards from '../Components/CoreSolutions/CoreCards.jsx'
import{Solutions} from '../Components/CoreSolutions/data.js'
import React from "react";
export default function Cloud() {
  return (
    <div>
      <HeroSolution data={SolutionHeroData[1]}/>
      <Section3 data={Section3Data[1]}/>
      <CoreCards data={Solutions[1]}/>
    </div>
  )
}
