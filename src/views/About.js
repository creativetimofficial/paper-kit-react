import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import React from 'react'

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
    <IndexHeader title="About Me" tagline="" />
    <div className='main'>
      <h1>Hey This Is Bro Wally</h1>
    </div>
    
    </>
  )
}

export default About