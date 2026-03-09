import img from "../../assets/vector1.png";

export const Banner = ({progress}) => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='grid lg:grid-cols-2 gap-10 '>
        <div className='relative bg-linear-to-bl from-[#632EE3] to-[#9F62F2]  h-auto w-auto flex justify-center items-center rounded-lg'>
          <div className='flex gap-4'>
            <img src={img}/>
            <img src={img} className='scale-x-[-1]' />
          </div>

          <div className='absolute top-1/2 left-50% -translate-y-1/2'>
            <h1 className='text-3xl font-bold'>In Progress <span> {progress}</span></h1>
          </div>
        </div>

        <div className='relative bg-linear-to-bl from-[#54CF68] to-[#00827A]  h-64 flex justify-center items-center rounded-lg'>
          <div className='flex gap-4'>
            <img src={img} />
            <img src={img} className=' scale-x-[-1]' />
          </div>

          <div className='absolute top-1/2 left-50% -translate-y-1/2'>
            <h1 className='text-3xl font-bold'>Resolved <span> 0</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};
