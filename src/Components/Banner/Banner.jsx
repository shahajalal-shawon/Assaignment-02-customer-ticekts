import img from "../../assets/vector1.png";

export const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='grid lg:grid-cols-2 gap-10 '>
        <div class='relative bg-linear-to-bl from-[#632EE3] to-[#9F62F2]  h-auto w-auto flex justify-center items-center rounded-lg'>
          <div class='flex gap-4'>
            <img src={img} class='' />
            <img src={img} class=' scale-x-[-1]' />
          </div>

          <div class='absolute top-1/2 left-50% -translate-y-1/2'>
            <h1 class='text-3xl font-bold'>In Progress <span> 0</span></h1>
          </div>
        </div>

        <div class='relative bg-linear-to-bl from-[#54CF68] to-[#00827A]  h-64 flex justify-center items-center rounded-lg'>
          <div class='flex gap-4'>
            <img src={img} class='' />
            <img src={img} class=' scale-x-[-1]' />
          </div>

          <div class='absolute top-1/2 left-50% -translate-y-1/2'>
            <h1 class='text-3xl font-bold'>Resolved <span> 0</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};
