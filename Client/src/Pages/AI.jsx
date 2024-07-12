import HeroSolution from '../Components/HeroPageForSolutions/HeroSolution'
import {SolutionHeroData} from '../Components/HeroPageForSolutions/Solutions.js'
import { Section3Data } from '../Components/Section3/Section3.js'
import Section3 from '../Components/Section3/Section3.jsx'
export default function AI() {
  return (
    <div>
      <HeroSolution data={SolutionHeroData[2]}/>
      <Section3 data={Section3Data[2]}/>
    </div>
  )
}
