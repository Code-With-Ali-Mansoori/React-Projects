import { IoReturnUpBackSharp  } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../Loader.jsx'

// https://restcountries.com/v3.1/name/india?fields=name,capital,flags,region,subregion,population,area,languages,borders,cca3,maps --> Details of Country Api

const CountryDetails = () => {

    const [countryData, setCountryData] = useState();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const params_name = useParams();
    
    useEffect(() => {
        const getCountries = async () => {
            try {
                if (!params_name) return;
                const CountrySearched = params_name.id.replace(":", '');

                const {data} = await axios.get(`https://restcountries.com/v3.1/name/${CountrySearched}?fields=name,capital,flags,region,subregion,population,area,languages,borders,cca3,maps`);

                setCountryData(data);  
                setLoading(false);
                 
            } catch (error) {
                console.error("API Error:", error);
            };
        };

        getCountries();
    }, [params_name]);

    if (loading) return <Loader/>;    

    const backFeature = () => {
        navigate('/country');
    };

  return (
    <div className="static ">
        { countryData && countryData.map((data, index) => {
        
        const lang = data.languages;
        const ArrayOfVlues = Object.values(lang);    //Picking Language Object Values

        return ( 
        <div key={index} className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-14 md:gap-24 lg:gap-64  py-16 my-20">

        <div> 
            <img className=" h-fit bject-cover mb-6" src={data.flags.png} alt="" />
        </div>

        <div className="leading-8 text-center md:text-left mb-10">
            <h1 className="text-2xl mb-4">{data.name.official}</h1>
            
            <div>
                <small className='text-gray-400'>Capital : </small>
                <small className='font-thin'>{data.capital[0]}</small>
            </div>

            <div>
                <small className='text-gray-400'>Languages : </small>
                { ArrayOfVlues &&
                    ArrayOfVlues.map((e, index) => {
                        return (<small key={index} className='font-thin'>{e} | </small>)
                    })
                }   
            </div>

            <div>
                <small className='text-gray-400'>Population : </small>
                <small className='font-thin'>{data.population}</small>
            </div>

            <div>
                <small className='text-gray-400'>Region : </small>
                <small className='font-thin'>{data.region}</small>
            </div> 

            <div>
                <small className='text-gray-400'>Sub-region : </small>
                <small className='font-thin'>{data.subregion}</small>
            </div>   

            <div>
                <small className='text-gray-400'>Country Map : </small>
                <small className='font-thin'><a href={data.maps.googleMaps} target="_blank">View Map</a></small>
            </div> 
                          
        </div>
        </div> )
            
    })}

     {/* Navigate Impitation => navigate('/country') */}
        <div onClick={backFeature} className="flex hover:bg-gray-900 mb-22 absolute bottom-96 md:bottom-80 right-14 md:right-15 justify-between items-center gap-3 border border-white rounded-2xl py-2 px-3">
        <IoReturnUpBackSharp />
        <button className="focus:outline-none cursor-pointer ">Go Back</button>

        </div>
        
    </div>
  )
}

export default CountryDetails;