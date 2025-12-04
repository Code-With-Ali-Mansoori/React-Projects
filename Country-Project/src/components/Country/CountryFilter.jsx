import {useState} from 'react';
import Serach from './serach.jsx';
import SortBtn from './SortBtn.jsx';
import SelectRegion from './SelectRegion.jsx';
import CountryCards from './CountryCards.jsx';

const CountryFilter = () => {

  const [countryData, setCountryData] = useState([]);
  const [serched, setSerched] = useState(''); 
  const [select, setSelect] = useState('all');  

  return (
    <div className='pb-12 w-full h-full lg:mx-auto'>
      <div className='flex mr-8 px-10 justify-evenly items-center gap-10 mt-16 mb-16'>
        <Serach serched={serched} setSerched={setSerched}/>
        <SortBtn countryData={countryData} setCountryData={setCountryData}/>
        <SelectRegion select={select} setSelect={setSelect}/>
      </div>

      <div className='p-10 '>
        <CountryCards countryData={countryData} setCountryData={setCountryData} serched={serched} select={select}/>
      </div>
      
    </div>
  )
}

export default CountryFilter
