import LeftHero from './leftHero.jsx';
import RightHero from "./RightHero.jsx";

const HeroSection = () => {
  return (
    <div className='w-auto bg-amber-400 md:text-white text-black  md:bg-black flex justify-evenly pl-13 pr-12 md:px-20 py-15'>
      <LeftHero/>
      <RightHero/>
    </div>
  )
}

export default HeroSection
