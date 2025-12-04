import SidePanel from "./SidePanel.jsx";
import {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';  //Routing

const Navigate = () => {

  const [isOpen, setIsOpen] = useState(false);

  const ShowPanel = () => {
    setIsOpen(!isOpen) // True
  };

  return (
    < >
        <div className='md:flex hidden gap-10 justify-around items-center'>  
          <nav className=" md:flex hidden gap-10 justify-around items-center">
            <Link className="cursor-pointer hover:text-gray-400" to={'/'}>Home</Link >
            <Link className="cursor-pointer hover:text-gray-400" to={'/about'}>About</Link >
            <Link className="cursor-pointer hover:text-gray-400" to={'/country'}>Country</Link >
            <Link className="cursor-pointer hover:text-gray-400" to={'/contact'}>Contact</Link >            
          </nav>      
        </div>

        <p onClick={ShowPanel} className='md:hidden flex justify-end items-center '><GiHamburgerMenu /></p>

        <SidePanel isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Navigate
