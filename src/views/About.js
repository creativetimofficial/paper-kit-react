// import IndexHeader from 'components/Headers/IndexHeader';
import IndexHeadImg from 'components/Headers/IndexHeadImg'
import IndexNavbar from 'components/Navbars/IndexNavbar';
import React from 'react'
import SectionTypography from './index-sections/SectionTypography';
import SectionDownload from './index-sections/SectionDownload';
import DemoFooter from 'components/Footers/DemoFooter';

function About() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });


  return (
    <>
    <IndexNavbar />
    {/* <IndexHeader title="About Me" tagline="" /> */}
    <IndexHeadImg title="About Me" tagline="" />
    <div className='main'>
      {/* <h1>Hey This Is Bro Wally</h1>
       */}
       <SectionDownload title="He Did It For Me, He Can Do It For You" description="As the world gets covered in darkness, Christ is and always will be the Light in Dark places. Pray for all those that are able to be saved, get saved and stay save in Jesus mighty name" />
    </div>
    <DemoFooter />
    
    </>
  )
}

export default About