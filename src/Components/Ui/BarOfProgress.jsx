import { useEffect, useState } from 'react'

const BarOfProgress = () => {

     const [scrollTop, setScrollTop] = useState(0) , 
     onScroll  = (e) => {
           const winScroll  = document.documentElement.scrollTop,
           height = document.documentElement.scrollHeight - document.documentElement.clientHeight , 
           scrolled =  (winScroll / height) * 100;
          setScrollTop(scrolled)
     };

     useEffect(() => {
       window.addEventListener('scroll' , onScroll)

       return () => window.removeEventListener('scroll' , onScroll)
     
   
     },[])
     
  return (
  <>
  <div className=' h-[4px] bg-headingColor fixed top-0 left-0 m-0 p-0 opacity-100 transition-default z-50 ' style={{width:`${scrollTop}%`}}></div>
  </>
  )
}

export default BarOfProgress