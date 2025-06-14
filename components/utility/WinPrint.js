import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

const print = () => {
    window.print();
    };

return (
    <button
        aria-label="Download Resume"
        className="exclude-print fixed bottom-8 right-8 group font-bold rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-1 shadow-2xl shadow-emerald-500/25 border-2 border-white/20 z-50 transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-emerald-500/40 hover:shadow-2xl backdrop-blur-sm"
        onClick={print}
      >
       <div className="bg-black/80 backdrop-blur-md rounded-full p-3 transition-all duration-300 group-hover:bg-black/60">
         <div className="relative">
           <MdPictureAsPdf 
             className="w-8 h-8 text-white transition-all duration-300 group-hover:text-emerald-300 group-hover:scale-110 group-hover:rotate-12" 
             title="Download Resume as PDF"
           />
           <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
         </div>
       </div>
       
       {/* Tooltip */}
       <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/90 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/20">
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
           Download as PDF
         </div>
         <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-black/90 rotate-45"></div>
       </div>
       
       {/* Success Ripple Effect */}
       <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       
       {/* Download Animation Ring */}
       <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    );
};

export default WinPrint;