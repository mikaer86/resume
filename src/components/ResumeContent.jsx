const ResumeContent = ({ school, company, title, duration, descriptions }) => {
  return (
    <ol className='flex flex-col md: relative border-l border-white'>
      <li className='mb-10 ml-4'>
        <div className=' absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5  border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start font-sans text-white text-xs md:text-sm'>
          <span className='inline-block px-2 py-1  font-semibold text-semibold text-white font-sans bg-[#10565e] rounded-md leading-none'>
            {duration}
          </span>
          <span className='text-lg font-semibold text-[#FCFCFC] font-sans'>
            {company}
          </span>
          <span className='text-lg font-semibold text-[#FCFCFC]font-sans'>
            {school}
          </span>
          <span className='text-lg font-normal text-[#FCFCFC] font-sans'>
            {title}
          </span>
        </p>
        <p className='my-2 text-base font-normal text-[#FCFCFC] font-sans'>
          {descriptions}
        </p>
      </li>
    </ol>
  );
};

export default ResumeContent;
