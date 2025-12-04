// {import axios from 'axios';

const Serach = ({serched, setSerched}) => {

  // const [countryData, setCountryData] = useState();

  const CountryTyped = (e) => {
    e.preventDefault();
    setSerched(e.target.value)
  };
  
  return (
    <div>
        <label className='border bg-zinc-900 py-2 px-3 rounded-2xl'>
            <input onChange={CountryTyped} value={serched} className='focus:outline-none' type="text" placeholder='Search...'/>
        </label>
    </div>
  )
}

export default Serach
