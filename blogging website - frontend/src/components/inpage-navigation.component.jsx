import { useState } from "react";

const InpageNavigation= ({routes})=>{
    let {InpageNavIndex , setInpageNavIndex}=useState(0)
    return(
    <>
     <div className="relative mb-8 bg-white border-b border-grey flex flex nowrap overflow-x-auto">
     {
        routes.map((route,i) => {
            return (
               <button key={i} className= {"p-b px-5 capitalise "}>
               {route}
               </button>
            )
        })
     }
     </div>
    </>
    
    )
}
export default InpageNavigation;