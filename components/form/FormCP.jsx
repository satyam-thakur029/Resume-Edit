import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCP = ({ formClose, setFormClose }) => {
  return (
    <button
      aria-label="Form Open/Close"
      className={`exclude-print fixed bottom-8 ${
        formClose ? 'left-8' : 'left-1/3 -translate-x-1/2'
      } group font-bold rounded-full  p-1 shadow-2xl shadow-purple-500/25 border-2 border-white/20 z-50 hidden md:block transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-purple-500/40 hover:shadow-2xl backdrop-blur-sm`}
      onClick={() => setFormClose(!formClose)}
    >
      <div className="bg-black/80 backdrop-blur-md rounded-full p-3 transition-all duration-300 group-hover:bg-black/60">
        {formClose ? (
          <div className="relative">
            <BsFillArrowRightCircleFill 
              className="w-8 h-8 text-white transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" 
              title="Open Form Panel" 
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          </div>
        ) : (
          <div className="relative">
            <BsFillArrowLeftCircleFill 
              className="w-8 h-8 text-white transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110" 
              title="Close Form Panel" 
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Tooltip */}
      <div className={`absolute ${
        formClose ? 'left-full ml-4' : 'right-full mr-4'
      } top-1/2 -translate-y-1/2 px-3 py-2 bg-black/90 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/20`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          {formClose ? 'Open Form Panel' : 'Close Form Panel'}
        </div>
        <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45 ${
          formClose ? '-left-1' : '-right-1'
        }`}></div>
      </div>
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  )
}

export default FormCP;