import react, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const SideBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        color={'white'}
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='#Home'
            className='w-[75%] flex justify-center rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer '
          >
            <AiOutlineHome size={20} alt='Home-icon' />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#About'
            className='w-[75%] flex justify-center rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer '
          >
            <BsPerson size={20} alt='About-icon' />
            <span className='pl-4'>About</span>
          </a>
          <a
            onClick={handleNav}
            href='#Projects'
            className='w-[75%] flex justify-center rounded-full shadow-lg bg-grey-100 shadow-gray-400 m-2 p-4 cursor-pointer '
          >
            <AiOutlineProject size={20} alt='Project-icon' />
            <span className='pl-4'>Projects</span>
          </a>
        </div>
      ) : (
        ''
      )}

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a
            onClick={handleNav}
            href='#Home'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover: scale-110 ease-in duration 300ms'
          >
            <AiOutlineHome color={'white'} size={20} alt='Home-icon' />
          </a>
          <a
            href='#About'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover: scale-110 ease-in duration 300ms'
          >
            <BsPerson color={'white'} size={20} alt='About-icon' />
          </a>
          <a
            onClick={handleNav}
            href='#Projects'
            className='rounded-full shadow-lg bg-black-100 shadow-grey-400 m-2 p-4 cursor-pointer hover: scale-110 ease-in duration 300'
          >
            <AiOutlineProject color={'white'} size={20} alt='Project-icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
