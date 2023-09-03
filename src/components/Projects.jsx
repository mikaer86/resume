import ProjectItem from './ProjectItem';
import Memory from '../assets/images/Memory.png';
import EcommerceWebApp from '../assets/images/EcommerceWebApp.png';

const Projects = () => {
  return (
    <div id='project-section' className='max-w-[1040px] m-auto md: p-4 py-16'>
      <h1 className='text-4xl font-bold text-[#FCFCFC] text-center m-auto pb-10'>
        Projects
      </h1>
      <div className='grid gap-10 md: grid-cols-1 '>
        <ProjectItem img={Memory} title='Memory Game' />
        <ProjectItem img={EcommerceWebApp} title='E-commerce Platform' />
      </div>
    </div>
  );
};

export default Projects;
