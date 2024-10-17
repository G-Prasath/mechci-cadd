import React from 'react'
import './Primary.css'

const PrimaryBtn = ({text}) => {
  return (
    <button className="button relative overflow-hidden h-11 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer">
      <span className="button-content relative z-10">{text}</span>
      <span className="button-hover-effect"></span>
    </button>
  )
}

export default PrimaryBtn
