const ProjectItem = ({ img, title }) => {
  return (
    <div className='w-full items-center justify-center h-auto rounded-md'>
      <img
        src={img}
        loading='lazy'
        alt='project-images'
        className='rounded-md'
      />
      <div className=' hidden hover: absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-md font-bold text-[#FCFCFC] tracking-wider text-center'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;
