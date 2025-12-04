import { useForm } from "react-hook-form";

const Form = () => {

  const {register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    alert('Message Sent!');
    reset(); 
  };

  return (
    <div className='mb-30 max-w-dvw overflow-x-hidden min-h-dvh min-w-dvh flex justify-center items-center flex-col'>
        <h2 className='text-center text-4xl mb-10'>Contact Us</h2>

      <form onSubmit={handleSubmit(submit)} action="" className=' w-sm flex flex-col gap-8 justify-center items-center '>
        <label className='border px-8 py-2 rounded-2xl w-full'>
            <input {...register('name')} className=' focus:outline-none' type="text" name="name"  id="" placeholder='Enter your Name...' />
        </label>

        <label className='border px-8 py-2 rounded-2xl w-full'> 
            <input {...register('email')} className=' focus:outline-none' type="email" name="email"  id="" placeholder='Enter your Email...' />
        </label>

        <label className='border px-8 py-2 rounded-2xl w-full h-36'>
            <textarea {...register('msg')}  className=' focus:outline-none h-full w-full overflow-hidden resize-none' name="msg" id="" placeholder='Enter your Message...' />
        </label>  

        <button className='border bg-zinc-900 cursor-pointer px-8 py-2 rounded-2xl w-full'>Send</button>      
        
      </form>
    </div>
  )
}

export default Form
