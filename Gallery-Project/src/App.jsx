import {useEffect, useState} from 'react'
import { ArrowLeft, ArrowRight  } from 'lucide-react';

const App = () => {

  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://picsum.photos/v2/list?page=${count}&limit=10`);
      const data = await res.json();
      setData(data);  
    };

    fetchData();

  }, [count]);


  let showData = 'Data is Fetching...';

  if(data.length > 0){
      showData = data.map((ele, index) => {         
        return <div key={index} className='h-50 w-56 m-6  p-5' >
          <a href={ele.url} target='_blank'>
            <img className='h-full w-full object-cover rounded-2xl' src={ele.download_url} alt="" /> 
            <h4 className='text-center mt-3'>Author - {ele.author}</h4>
          </a>
        </div>   
      })    
  }

  return (
    <div className='bg-black text-white h-vh p-6'>
      <h1 className='text-6xl text-center mb-10'>Gallery Projects</h1>

      <div>
      <h2 className='text-center text-lg'>Page: {count}</h2>

      <div className='flex gap-6 w-fit my-7 mx-auto'>
        <button 
          onClick={() => {
            if(count > 1){ 
              setCount(count-1); 
              setData([]) }
          }} 
        className='bg-white text-black px-6 py-2 cursor-pointer rounded-xl'>Prev <ArrowLeft /></button>

        <button 
          onClick={() => {
            setData([]); 
            setCount(count+1) }} 
          className='bg-white text-black px-6 py-2 cursor-pointer rounded-xl'>Next <ArrowRight /></button>
      </div>
      </div>

    <div className='flex h-svh flex-wrap gap-5 justify-around align-middle py-4 '>
      {showData}
    </div>

    </div>
  )
}

export default App
