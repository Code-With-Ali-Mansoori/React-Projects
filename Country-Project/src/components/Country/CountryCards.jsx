import {Link} from 'react-router-dom'; 
import {useEffect, useState} from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';
import Loader from '../Loader.jsx'

// [All Data]
// https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags

// https://restcountries.com/v3.1/region/asia?fields=name,population,region,capital,flags
// [Filter by Region]

// https://restcountries.com/v3.1/name/india?fields=name,population,region,capital,flags
// [Filter by Name]

const CountryCards = ({countryData, setCountryData, serched, select,}) => {

    // const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            (async () => {
            try {
                const {data} = await axios.get(`https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`);
                
                setCountryData(data);
                setLoading(false);
                 
            } catch (error) {
                console.error("API Error:", error);

            }
            })();

    }, []);
    
    // API Call when Region Changes
    useEffect(() => {
        (async () => {
            try {

            let url = "";          

            // If no region -> All API
            if ( select === "all") {
                url = `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`;
                
            } else { // If region selected -> region API
                url = `https://restcountries.com/v3.1/region/${select}?fields=name,population,region,capital,flags`;

            };

            const {data} = await axios.get(url);
            
            const filteredData = 
            serched?.trim() !== "" ? data.filter((country) =>       // Filtering by User Provided Searched Country
                country.name.common.toLowerCase().includes(serched?.trim().toLowerCase()))
            : data;
            
            setCountryData(filteredData);
            setLoading(false);
                 
            } catch (error) {
                console.error("API Error:", error);

            }
        })();

    }, [select, serched]);

    if( loading ) return <Loader/>;

  return (
    <div className='flex  flex-row w-full justify-center items-center flex-wrap gap-12'>
        { countryData.map((datas, index) => {

        return (<div key={index} className='flex w-72 md:w-2xs p-5 md:mx-5  border-gray-600 border md:justify-start rounded-3xl flex-col mt-4  md:items-left text-left '>

        <img className='object-cover h-32 w-full mb-4 ' src={datas.flags.svg} alt="" />

        <h1 className='text-2xl font-medium mb-1'>{datas.name.common.length > 10? datas.name.common.slice(0,11) + '...' : datas.name.common}</h1>

        <div>
            <small className='text-gray-400'>population :</small>
            <small className='font-thin'>{datas.population}</small>
        </div>

        <div>
            <small className='text-gray-400'>Region :</small>
            <small className='font-thin'> {datas.region}</small>
        </div>

        <div>
            <small className='text-gray-400'>Capital :</small>
            <small className='font-thin'> {datas.capital[0]}</small>
        </div>

        <Link to={`/country/:${ datas.name.common}`} className='flex hover:bg-gray-900 mt-3 py-1 cursor-pointer font-light rounded-2xl justify-center gap-1.5 w-fit px-2 border border-amber-50 items-center'>
            
            <small className='font-sans text-gray-200 '>Read More </small> 
            <FaLongArrowAltRight />
        </Link>
        </div>)
    })} 
    </div>
  )
}

export default CountryCards;