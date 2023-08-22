/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";

// import 'animate.css-react'
// import Animate from 'animate.css-react'

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true)
    }
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad)
    }
  
    return () => {
      window.addEventListener('load', onPageLoad)
    }
  }, [])
  
  if (loading) {
    return (
    
      <>
      
        <IndexNavbar />
        <IndexHeader title="Wally Carlson" tagline="Jesus Christ is LORD" />
        <div className="main">
          {/* <SectionButtons />
          <SectionNavbars />
          <SectionNavigation />
          <SectionProgress />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavaScript />
          <SectionCarousel />
          <SectionNucleoIcons />
          <SectionDark />
          <SectionLogin />
          <SectionExamples /> */}
          <SectionDownload title='The KING is Coming Soon' description='Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.' cite='Revelation 3:20' />
          <DemoFooter />
        </div>
      </>
    );
  } else {
    return <div></div>
  }
  

  
}

export default Index;
