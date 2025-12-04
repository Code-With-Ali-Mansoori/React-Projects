const SortBtn = ({countryData, setCountryData}) => {

  const sortCountry = (value) => {
    const sorted = [...countryData].sort((a,b) => {
        return value === 'asc' ? 
        a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
    });

    setCountryData(sorted); 
  };

  return (
    <div>
      <div className='flex  gap-8 justify-center items-center'>
        <button onClick={() => sortCountry('asc')} className='border-white bg-zinc-900 border py-2 px-3 text-gray-300 rounded-2xl'>Asc</button>
        <button onClick={() => sortCountry('dsc')} className='border-white bg-zinc-900 border py-2 px-3 text-gray-300 rounded-2xl'>Dsc</button>
      </div>
    </div>
  )
}

export default SortBtn
