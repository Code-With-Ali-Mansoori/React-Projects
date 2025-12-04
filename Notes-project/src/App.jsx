import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [discription, setDisc] = useState('');
  const [notes, setNotes] = useState([]);

  //Event runs when form submited!
  const formSubmit = (e) => {
    e.preventDefault();

    const copyNotes = [...notes];
    copyNotes.push({title, discription});
    setNotes(copyNotes);

    console.log('Form Submitted!');

    setTitle('');
    setDisc('');
  };

  // Event runs when user writing in <Input tag>!
  const Input_texting = (e) => {
    setTitle(e.target.value);    
  };

  // Event runs when user writing in <Textarea tag>!
  const Discription_texting = (e) => {
    setDisc(e.target.value);    
  };

  // Event runs when user Delete the Notes!
  const dltNotes = (index) => {
    const copyNotes = [...notes];     
    copyNotes.splice(index, 1);
    setNotes(copyNotes);   
  };

  return (
  <div className='bg-black px-8 text-white min-h-screen w-full flex flex-col justify-around align-middle'>

    <h1 className='text-amber-50 text-6xl text-center mt-12 font-mono uppercase'> Notes APP</h1>

    <div className="bg-zinc-900  mx-auto p-8 rounded-2xl shadow-lg w-full max-w-md h-fit mt-20">
    <h2 className="text-2xl font-semibold text-center mb-6 text-white">Add a Note</h2>

    <form onSubmit={formSubmit} className="flex flex-col gap-4">
      <input onChange={Input_texting} 
        type="text" 
        value={title}
        placeholder="Title"
        className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <textarea onChange={Discription_texting}
        placeholder="Description"
        value={discription}
        rows="4"
        className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
      ></textarea>

      <button 
        type="submit"
        className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition-all"
      >
        Add Note
      </button>
    </form>
    </div>

    <div>
      <h1 className='text-amber-50 text-6xl text-center mt-30 font-mono uppercase'>Recent Notes</h1>

      <div className='bg-zinc-600 mb-10 mx-auto p-15 rounded-2xl shadow-lg w-2/3 h-fit mt-10  flex flex-wrap justify-around align-middle overflow-auto gap-10'>

      { notes.map((data, index) => {
          return <div key={index} className='bg-white p-8 h-80 w-60 rounded-3xl text-black relative'>
          <h1 className='font-bold mb-4'>{data.title}</h1>
          <p>{data.discription}</p>
          <button onClick={() => {
            dltNotes(index)
          }} className='bg-green-600 font-semibold px-4 py-1 rounded absolute bottom-5 left-7 text-white'>Delete</button>
          </div> 
      })}

      </div>
    </div> 
  </div>
)}

export default App;