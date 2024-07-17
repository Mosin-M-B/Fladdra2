import React from "react";

import { Section3Data } from '../Components/Section3/Section3.js'
import Section3 from '../Components/Section3/Section3.jsx'
import HeroSolution from '../Components/HeroPageForSolutions/HeroSolution.jsx'
import {SolutionHeroData} from '../Components/HeroPageForSolutions/Solutions.js'
import CoreCards from '../Components/CoreSolutions/CoreCards.jsx'
import{Solutions} from '../Components/CoreSolutions/data.js'



function DataPage() {
  console.log('Datyaaaaaaaaa', Section3Data)
  return (
    <div>
      <HeroSolution data={SolutionHeroData[0]}/>
      <Section3 data={Section3Data[0]}/>
      <CoreCards data={Solutions[0]}/>
    </div>
  )
}

export default DataPage
