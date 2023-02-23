import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Icon = ({type} : {type : string}) => {
  return (
    <i className={type}/>
  )
}

export default Icon