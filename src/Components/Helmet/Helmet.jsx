import React from 'react'

const Helmet = ((props) => {
     document.title  =  props.title    
  return (
    <div className='w-full container mx-auto'>{props.children}</div>
  )
})

export default Helmet
