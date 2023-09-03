import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import keyboard from '../assets/images/keyboard.jpg';

const Home = () => {
  return (
    <div>
      <img
        className='sm: w-full h-screen object-cover opacity-60'
        src={keyboard}
        loading='lazy'
        alt='keyboard-image'
      />

      <div className='w-full h-screen absolute top-0 left-0 bg-grey-200'>
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center p-5'>
          <h1
            className='sm: text-5xl font-bold
          font-sans text-[#FCFCFC]'
          >
            Mikael Eriksson
          </h1>
          <h2 className='flex sm: font-sans text-3xl p-4 text-[#FCFCFC]'>
            I'm
            <TypeAnimation
              sequence={[
                'a Developer',
                2100,
                'a Photographer',
                2100,
                'a Creative',
                2100,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-evenly pt-6 max-w-[200px] w-full'>
            <a
              href='https://www.instagram.com/mikael_eriksson86'
              aria-label='link to the instagram profile'
            >
              <FaLinkedin
                color={'#FCFCFC'}
                className='cursor-pointer'
                size={30}
              />
            </a>
            <FaInstagram
              color={'#FCFCFC'}
              className='cursor-pointer'
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
