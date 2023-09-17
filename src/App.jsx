import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import WorkHistory from './components/WorkHistory';
// import DocumentMeta from 'react-document-meta';
import './App.css';

function App() {
  // const meta = {
  //   title: 'Portfolio',
  //   description: 'work Portfolio for Mikael Eriksson',
  //   canonical: 'https://github.com/mikaer86',
  //   meta: {
  //     charset: 'utf-8',
  //     name: {
  //       keywords: 'portfolio, projects, cv, frontend',
  //     },
  //   },
  // };
  return (
    <div className='bg-[#030303e8]'>
      {/* <DocumentMeta {...meta} /> */}
      <SideBar />
      <Home />
      <About />
      <WorkHistory />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
