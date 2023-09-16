const ProjectItem = ({ img, title }) => {
  return (
    <div
      aria-label='project-card'
      className='w-full items-center justify-center h-auto rounded-md'
    >
      <div className='relative overflow-hidden'>
        <img
          src={img}
          loading='lazy'
          alt='project-images'
          className='rounded-md'
        />
        <div className='absolute w-full h-full inset-0 bg-gradient from-transparent  via-transparent to-black group-hover: from-black/70 group-hover: via-black/60'>
          <div className='absolute inset-0 flex flex-col items-center justify-center translate-x-[60%]'>
            <button className=' bg-black text-white p-2 '>Repo</button>
            <button className='bg-black text-white p-2'>Live</button>
          </div>
        </div>
      </div>
      <div className='w-full p-3'>
        <h3 className='text-md font-bold text-[#FCFCFC] tracking-wider text-center'>
          {title}
        </h3>

        <p className='font-semibold text-normal text-white underline text-center pt-3'>
          Technologies:
        </p>
        <div className='flex flex-row justify-center p-5'>
          <span className=' bg-yellow-600  rounded-full  font-semibold text-sm text-white m-2 p-1.5'>
            #html
          </span>
          <span className=' bg-yellow-600 rounded-full font-semibold text-sm text-white m-2 p-1.5'>
            #css
          </span>
          <span className=' bg-yellow-600 rounded-full font-semibold text-sm text-white m-2 p-1.5'>
            #Javascript
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
