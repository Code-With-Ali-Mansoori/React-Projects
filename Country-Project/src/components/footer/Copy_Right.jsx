import {Link} from 'react-router-dom';  //Routing

const Copy_Right = () => {
  return (
    <div className='lg:flex px-10 justify-around pb-4 md:px-40'>

      <small className='text-gray-300 text-center lg:text-left sm:mt-4 flex items-center pb-2 justify-center sm:block  md:ml-10'>Copyright © 2025. All Right Reserved By Ali Mansoori </small>

      <div className='flex justify-between md:ml-auto md:mr-5 items-center mt-3 mb-6  text-gray-400 gap-8'>
        <Link to={'/'} className="font-mono">Home</Link>
        <a className="font-mono" target="_blank" href="https://github.com/Code-With-Ali-Mansoori/React-Projects
">Code</a>
        <a className="font-mono"  href="https://github.com/Code-With-Ali-Mansoori" target="_blank">Github</a>
        <Link to={'/contact'} className="font-mono">Contact</Link>
      </div>

      <hr className='mb-4 '/>  
    </div>
  )
}

export default Copy_Right;