const SelectRegion = ({select, setSelect}) => {

  const SelectTyped = (e) => {
    e.preventDefault();
    setSelect(e.target.value)
  };

  return (
    <div >
        <select value={select} onChange={SelectTyped} className='border ml-2 bg-zinc-900 px-4 py-1 text-white rounded-2xl'>
            <option value="all">All</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SelectRegion
