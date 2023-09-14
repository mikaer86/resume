const ProjectItem = ({ img, title }) => {
  return (
    <div
      aria-label='project-card'
      className='w-full items-center justify-center h-auto rounded-md'
    >
      <img
        src={img}
        loading='lazy'
        alt='project-images'
        className='rounded-md'
      />
      <div className='w-full p-3'>
        <h3 className='text-md font-bold text-[#FCFCFC] tracking-wider text-center'>
          {title}
        </h3>

        <p className='font-semibold text-normal text-white underline text-center pt-3'>
          Technologies:
        </p>
        <div className='flex flex-row justify-center p-5'>
          <span className=' bg-yellow-600  rounded-full  font-semibold text-sm text-white m-2 p-1.5'>
            #HTML
          </span>
          <span className=' bg-yellow-600  rounded-full font-semibold text-sm text-white m-2 p-1.5'>
            #CSS
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
