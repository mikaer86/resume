import profile from '../assets/images/profile.png';

const About = () => {
  return (
    <div id='About' className='max-w-[1040px] m-auto md: p-4 py-16'>
      <div className='p-4'>
        <h1 className='text-3xl font-sans font-bold text-center text-white pb-3 pl-3'>
          About Me
        </h1>
      </div>
      <div
        className='flex flex-col  justify-center items-center gap-1 bg-[#131313]
        p-2 rounded-md '
      >
        <img
          src={profile}
          loading='lazy'
          alt='profile-image'
          className='max-w-[45%] m-auto  rounded-full object-cover'
        />

        <section className='p-4'>
          <h1 className='text-2xl font-sans font-bold text-white pb-2 pl-3'>
            Hello!
          </h1>
          <p className='inline-flex ml-3 text-md kerning-normal tracking-normal font-sans text-white pt-2'>
            I am an aspiring frontend developer currently enrolled at Hyper
            Island Stockholm until spring 2024.
          </p>
          <p className='inline-flex ml-3 text-md kerning-normal tracking-normal font-sans text-white  pt-2'>
            {' '}
            I have a good foundation in HTML CSS and Javascript and proficiency
            in react framework and tailwind CSS.
          </p>
          <p className='inline-flex ml-3 text-md kerning-normal tracking-normal font-sans text-white  pt-2'>
            {' '}
            My greatest qualities is that i'm goal oriented, creative problem
            solver.
          </p>
          <strong className='inline-flex ml-3 text-md kerning-normal tracking-normal font-sans text-white pt-2'>
            {' '}
            DM me for a coffee and maybe discuss future opportunities{' '}
          </strong>{' '}
        </section>
      </div>
    </div>
  );
};

export default About;
