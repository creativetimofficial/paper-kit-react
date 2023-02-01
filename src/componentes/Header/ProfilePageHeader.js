import React from "react";

// reactstrap components

// core components

const ProfilePageHeader = (prop) =>{
  let pageHeader = React.createRef();
  const img = prop?.imagen
  const alturaBanner = prop?.alturaBanner
  const minHeight = prop?.minHeight

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage:
            "url(" + require(`../../assets/img/${img}`) + ")", backgroundPositionY: `${alturaBanner && alturaBanner.toString()}`, minHeight: `${minHeight ? minHeight.toString(): "40vh"}`
        }}
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </>
  );
}

export default ProfilePageHeader;
