import ResumeContent from './ResumeContent';

const WorkHistory = () => {
  const data = [
    {
      id: 1,
      school: 'Hyper Island',
      title: 'Frontend Development',
      duration: 'Aug2022-Current',
      descriptions:
        'The program focus the fuandation about frontend fundamentals (HTML, css and Javascript) to frameworks like React while also touching on backend technologies like postgreSQL and Firebase.',
    },
    {
      id: 2,
      company: 'Nordiske Medier Stockholm AB',
      title: 'Account Manager',
      duration: 'Jun2019-Aug2022',
      descriptions:
        ' to build long-term client relationships via social channels etc.emails and cold-calls take responsibility prospecting, selling to develop potential clients develop and upgrade clients subscription plans through our diverse media channels, also segment new leads and incentives through negotiations',
    },

    {
      id: 3,
      school: 'Halmstad University',
      title: 'Digital Design & innovation',
      duration: 'Aug2014-jan2019',
      descriptions:
        'educational aim at developing theortical and practical foundation for development of digital services with a main focus on user experience (UX).',
    },

    {
      id: 4,
      company: 'Insales Örebro AB',
      title: 'Sales Associate',
      duration: 'Aug2012-Jun2013',
      descriptions:
        'Responsibilities: • Identify and analyze needs with potential consumers • Negotiating Pricing plans with clients for potential purchases.',
    },

    {
      id: 5,
      company: 'Pro Canvass KB',
      title: 'Sales Associate',
      duration: 'Aug2011-Jun2012',
      descriptions:
        'Responsibilities: • Identify and analyze needs with potential clients. • Negotiating Pricing plans with clients for potential purchases.',
    },

    {
      id: 6,
      company: 'Random Sales & Media AB',
      title: 'Sales Associate',
      duration: 'Jun2010-Aug2011',
      descriptions:
        'Responsibilities: • Processing the consumer market through field marketing, offering telecommunication and media solutions. • Build relationships with potential prospects • Analyze consumer needs • Negotiate and offer product and pricing models.',
    },
  ];
  return (
    <div id='workHistory' className='max-w-[1040px] m-auto pl-10 p-4 py-16'>
      <h1 className='text-4xl text-[#FCFCFC] font-bold text-center pr-4 pb-10'>
        CV
      </h1>
      {data.map((item, id) => (
        <ResumeContent
          key={id}
          school={item.school}
          title={item.title}
          company={item.company}
          duration={item.duration}
          descriptions={item.descriptions}
        />
      ))}
    </div>
  );
};

export default WorkHistory;
