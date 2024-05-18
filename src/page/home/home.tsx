import Image from '@/components/ui/image';
import { getLocalStorage, setLocalStorage } from '@/lib/utils';
import * as React from 'react';
import personImage from '@/assets/images/Photo.png'
import demoImage from '@/assets/images/background-image.jpg'

import Navbar from '@/components/ui/navbar';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import Each from '@/components/ui/each';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Linkedin',
    icon: <Linkedin />,
  },
  {
    name: 'Github',
    icon: <Github />,
  },
  {
    name: 'abc@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'CV',
    icon: <FileText />,
  }
];

const skills = [
  {
    name: 'Web Development:',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'SCSS', 'Bootstrap']
  },
  {
    name: 'Frameworks:',
    skills: ['React', 'Nest', 'Next']
  },
  {
    name: 'Database:',
    skills: ['SQL','']
  },
  {
    name: 'Version Control:',
    skills: ['Git', 'GitHub']
  },
  {
    name: 'Package Managers:',
    skills: ['NPM', 'PNPM', 'YARN']
  },
  {
    name: 'Other skills:',
    skills: ['Node.js', 'Google model-viewer', 'AWS Lambda serverless']
  },
];

const projects = [
  {
    name: 'Personal Portfolio',
    description: `Developed an interactive web application using React ,Shadcn-Ui and Tailwind.
    Designed to be a reflective space for personal and professional growth,
    with a focus on simplicity and minimalism.`,
    image: demoImage,
    siteLink: 'http://localhost:5173/',
    links: [{
      name: 'Github',
      link: '',
      icon: <Github />,
      gitLink: '',
    }]
  },
  {
    name: 'Color prediction game',
    description: `Color Prediction Game is a thrilling and engaging challenge 
    where players predict the next color to appear in a sequence. With each correct prediction,
     players advance to higher levels, testing their intuition and luck. The game offers a simple 
     yet addictive experience,perfect for quick entertainment and sharpening color recognition skills.`,
    image: demoImage,
    siteLink: 'http://localhost:5173/',
    links: [{
      name: 'Github',
      link: '',
      icon: <Github />,
      gitLink: '',
    }]
  }
]
const Home = () => {
  const NAME = 'Sarvjeet Thakur';
  const [name, setName] = React.useState(NAME[0]);
  const [activeTab, setActiveTab] = React.useState('home');

  React.useEffect(() => {
    const storageCount = getLocalStorage(import.meta.env.VITE_APP_STORE_COUNT_KEY);
    let count = storageCount ? storageCount : 1;
    const totalLength = NAME.length;
    const intervalId = setInterval(() => {
      const subStringName = NAME.substring(0, count);
      if (count < totalLength) {
        count++;
      } else {
        count = 1;
      }
      setLocalStorage(import.meta.env.VITE_APP_STORE_COUNT_KEY, count);
      setName(subStringName.toUpperCase());
    }, 400);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
    const activeDocument: HTMLElement | null = document.getElementById(`${tab}`);
    activeDocument?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getFavIcon = (site: string) => {
    const icon = `${site}/favicon.ico`
    return icon
  }

  return (
    <>
      <Navbar activeTab={activeTab} handleActiveTab={handleActiveTab} />
      {/* home */}
      <div id='home' className='flex items-center justify-center w-full bg-black p-4'>
        <div className="flex justify-start items-start flex-col flex-wrap sm:w-[50%]  xl:p-[3rem]">
          <div className='p-2'>
            <Image src={personImage} height={100} width={100} alt='pro image' />
          </div>
          <div className='w-full flex justify-between items-center p-2 flex-wrap'>
            <p className='text-[2rem] font-[700'>
              HEY, I AM
              <span style={{ textShadow: '0 0 10px white' }}>
                {' '}{name}
              </span>

            </p>
            <p className='bg-blue-300 rounded-sm p-2 cursor-pointer'>
              Open to work
            </p>
          </div>
          <div className='text-xl font-medium text-[#ffff] mt-3'>
            Motivated and adaptable eager to contribute and learn.
            Passionate Web Developer and designer. Dedicated of Pixel Perfect web.
          </div>
          <div className='flex justify-between items-center w-full p-3 mt-4 flex-wrap'>
            <Each of={socialLinks} render={(item) => (
              <span className='flex m-2 justify-center items-center gap-2 rounded-full border-white border p-2 bg-[#717171]'>
                {item.icon} <span>{item.name}</span>
              </span>
            )} />
          </div>
        </div>
      </div>
      {/* skills */}
      <div id='skills' className='flex items-center justify-center w-full bg-black p-4'>
        <div className="flex justify-start items-start flex-col flex-wrap sm:w-[50%]  xl:p-[3rem]">
          <h2 className='text-[30px] font-[700]'># Skills</h2>
          <div className='mt-4'>
            <Each of={skills} render={(item) => (
              <>
                <div className='text-[20px] font-[600] p-2'>
                  <span> {item.name}</span>
                </div>
                <div className='flex justify-start items-center gap-3 flex-wrap'>
                  <Each of={item.skills} render={(skill) => (
                    <span className='bg-[#717171] text-[15px] font-[500] border border-[#FFFFFF] px-3 py-1 rounded-full'>
                      {skill}
                    </span>
                  )} />
                </div>
              </>
            )} />
          </div>
        </div>
      </div>
      {/* project */}
      <div id='project' className='flex items-center justify-center w-full bg-black p-4'>
        <div className="flex justify-start items-start flex-col flex-wrap sm:w-[50%]  xl:p-[3rem]">
          <h2 className='text-[30px] font-[700]'>{`</> Projects`}</h2>
          <div>
            <Each of={projects} render={(item) => (
              <div className='mt-4 mb-5'>
                <b className='text-[1.4rem] text-[#FFEA9F]'>{item.name}</b>
                <Link to={item.siteLink} target='_blank' rel="noopener noreferrer" className='flex justify-start items-center gap-2'>
                  <Image className="w-4 h-4 rounded-full" src={getFavIcon(item.siteLink)} width={10} height={10} alt='fav icon' />
                  <span className=' text-blue-500 underline'>
                    {item.siteLink}
                  </span>
                </Link>
                <p>{item.description}</p>
                <div className='flex justify-start items-center mt-3'>
                  <Each of={item.links} render={(link) => (
                    <Link to={link.gitLink} target='_blank' rel="noopener noreferrer">
                      <span className='bg-[#717171] text-[15px] font-[500] flex border border-[#FFFFFF] px-3 py-1 rounded-full cursor-pointer'>
                        {link.icon} {link.name}
                      </span>
                    </Link>
                  )} />
                </div>
                <div className='h-[700px] projects-image pl-20 pt-14 mt-4 rounded'>
                  <div className='bg-[#717171] h-full w-full rounded-t-[3px] pt-2 max-h-[700px]'>
                    <div className=' flex gap-1 ml-3 mt-3'>
                      <span className='p-1 bg-red-500 rounded-full'></span>
                      <span className='p-1 bg-yellow-500 rounded-full'></span>
                      <span className='p-1 bg-green-500 rounded-full'></span>
                    </div>
                    <Image className='h-[93%] w-full mt-9 object-cover' src={demoImage} alt='Project image' width={100} height={100} />
                  </div>
                </div>
              </div>
            )} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;