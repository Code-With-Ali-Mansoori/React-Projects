import { LuPanelRightClose } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaLandmarkFlag } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import {Link} from 'react-router-dom';  //Routing

const SidePanel = ({isOpen, setIsOpen}) => {

  const HidePanel = () => {
    setIsOpen(false)
  };

  return (
    <div className={`bg-zinc-700  md:hidden absolute py-10 top-0 right-0 p-4 w-5/5 text-left ${isOpen ? "block" : "hidden"}`}>  
        <nav className='flex flex-col gap-4 '>

          <Link to={'/'} className="flex items-center  gap-1">
            <p className="pl-1" > Home </p> 
            <MdHome className="mt-1 "/>
          </Link>

          <Link to={'/about'} className="flex items-center gap-1">
            <p className="pl-1" > About </p> 
            <FcAbout className="mt-1 "/>
          </Link>

          <Link to={'/country'} className="flex items-center gap-1">
            <p className="pl-1" > Country </p> 
            <FaLandmarkFlag />
          </Link>          

          <Link to={'/contact'} className="flex items-center gap-1">
            <p className="pl-1" > Contact </p> 
            <MdContactPage />
          </Link> 
          
          <div onClick={HidePanel} className="flex mt-3 w-fit justify-between items-center gap-3 border border-white rounded-2xl py-2 px-3">
            <LuPanelRightClose />
            <button className="focus:outline-none cursor-pointer">Close</button>
          </div> 

        </nav>
    </div>
  )
}

export default SidePanel
