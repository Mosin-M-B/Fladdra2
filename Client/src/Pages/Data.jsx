import { Section3Data } from '../Components/Section3/Section3.js'
import Section3 from '../Components/Section3/Section3.jsx'
import HeroSolution from '../Components/HeroPageForSolutions/HeroSolution'
import {SolutionHeroData} from '../Components/HeroPageForSolutions/Solutions.js'
function Data() {
  return (
    <div>
      <HeroSolution data={SolutionHeroData[0]}/>
      <Section3 data={Section3Data[0]}/>
    </div>
  )
}

export default Data
