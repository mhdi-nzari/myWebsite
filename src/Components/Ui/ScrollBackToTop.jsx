import  { useState, useEffect } from "react";
import { ArrowUp } from "iconsax-react";


// Button is  displayed after scrolling for 300 pixels 
const ScrollBackToTop = () => {

  const [ showGoTop, setShowGoTop ] = useState( false ),

   handleVisibleButton = () => {
      setShowGoTop( window.pageYOffset > 500 )
  },
  
   handleScrollUp = () => {
      window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
  };
  
  useEffect( () => {
      window.addEventListener( 'scroll', handleVisibleButton )
  }, [] );

  return (
    <>
      <div
        className={`fixed bottom-20  z-20 animate-bounce transition-default cursor-pointer  ${showGoTop ? "right-5" : '-right-28'}`}
        onClick={handleScrollUp}
      >
        <div className="  flex items-center justify-center p-3  bg-white shadow-default transition-default rounded-full border-[1px] border-solid hover:border-secondary z-[1]   ">
          <ArrowUp size="25" color="#3f3f3f" variant="Broken" />
        </div>
      </div>
    </>
  );
};

export default ScrollBackToTop;
