import CountryData from '../../api/CountryData.json';

// md:gap-6 justify-between items-center mt-10 

const BodyCards = () => {
  return (
    <div className='md:flex lg:w-5xl mx-auto flex-wrap gap-10 pt-12 px-20'>
      {/* */}
    { CountryData.map((countries) => {
            const {id, country, capital, population, fact} = countries;

            return <div key={id} className='bg-zinc-900  p-6 border-0 my-8 w-2/3 md:w-2xl lg:w-2xl 2xl:w-1/6 rounded-3xl text-white mx-auto'>

            <h1 className='font-bold mb-1'>{country}</h1>
            <div>
                <small className='text-gray-400'>Capital : </small>
                <small className='font-thin'> {capital}</small>
            </div>

            <div>
                <small className='text-gray-400'>population :</small>
                <small className='font-thin'> {population}</small>
            </div>

            <div>
                <small className='text-gray-400'>Interesting Facts: </small>
                <small className='font-thin'> {fact}.</small>
            </div>
        </div>
        })
    }
    </div>
  )
}

export default BodyCards


//  192.168.81.109