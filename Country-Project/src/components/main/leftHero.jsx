import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from 'react-router-dom';  //Routing

const LeftHero = () => {
  return (
    <div className="w-fit  md:w-2/4 md:pl-10 py-5 2xl:pl-28">
      <h1 className="text-2xl md:text-5xl font-bold mb-5">Explore the World, One Country at a Time.</h1>

      <small className="md:text-gray-300 text-black">Lorem amet consectetur adipisicing ipsum, dolor sit amet consectetur adipisicing  amet consectetur adipisicing ipsum, elit. Eius, voluptates amet consectetur adipisicing ipsum.</small>

      <div className="flex gap-3 border w-fit  rounded-2xl mt-6 px-3 py-2 items-center">
        <Link to={'/country'}>Start Exploring </Link>
        <FaLongArrowAltRight />
      </div>

    </div>
  )
}

export default LeftHero;