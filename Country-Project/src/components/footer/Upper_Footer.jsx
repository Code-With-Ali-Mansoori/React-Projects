import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Upper_Footer = () => {
  return (
    <div className='flex justify-around items-center my-8 mb-12'>

    <div className='sm:flex justify-center gap-2 items-center'>
        <div className='text-2xl sm:text-4xl flex mb-2 justify-center sm:block'><MdLocationOn /> </div>
        <div>
            <p className='font-medium text-base sm:text-base text-center'>Find us</p>
            <small className='text-gray-400 text-center'>Pune, Maharashtra</small>
            </div>
    </div>

    <div className='sm:flex justify-between gap-2 items-center'>
        <div className='text-2xl sm:text-4xl flex mb-2 justify-center sm:block'><IoIosCall /> </div>
        <div>
            <p className='font-medium text-center'>Call us</p>
            <small className='text-gray-400 text-center'>9876543211</small>
            </div>
      </div>

    <div className='sm:flex justify-center gap-2 items-center'>
        <div className='text-2xl sm:text-4xl flex mb-2 justify-center sm:block'><IoIosMail /> </div>
        <div>
            <p className='font-medium text-center'>Mail us</p>
            <small className='text-gray-400 text-center'>contact@12g.com</small>
            </div>
      </div>

    </div>
  )
}

export default Upper_Footer
