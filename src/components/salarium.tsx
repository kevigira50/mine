import React from "react";
import images from '../../src/image/image.jpg';
import { FiArrowDown } from "react-icons/fi";
export default function salarium() {
 return(

     <>
    <div className="">
        <div className= "flex w-1/2">
     <h1 className="text-green-500  flex flex-wrap text-5xl py-3 px-20"><b>salarium</b></h1>
     </div>
                 <div className="px-20">
            <div className="flex justify-end display-center pb-44">
            <p className="text-green-500 hover:bg-green-700  px-2 py-3 "><a href=""></a>home</p>
            <p className="text-black-500 hover:bg-green-700  px-2 py-3 "><a href=""></a>how it works</p>
            <p className="text-black-500 hover:bg-green-700  px-2 py-3 "><a href=""></a>FAQs</p>
            <p className="text-black-500 hover:bg-green-700  px-2 py-3"><a href=""></a>contact</p>
            </div>
            <div className="px-12">
                <p className="flex justify-center text-green-500 text-5xl >"><b>on-demand salary</b></p>
              <p className="flex justify-center text-black-500 text-5xl justify-center"><b>for every employee</b></p>
              
              <p className="flex justify-center text-black-500 text-2xl justify-center">get your earned salary instantly,
              request weekly
              </p>
              <p className="flex justify-center text-black-500 text-2xl justify-center"> bi-weekly or anytime you please</p>
            </div>
             <div className="flex justify-center py-12 ">
             <button type="button" className="bg-green-500 px-16 py-4 text-white rounded-full py-3 px-6 text-3xl">Get started</button>
             </div>

            
             <div className="flex justify-center pb-12">
               <img src={images} alt='testing image' />
               </div>
               <p className="flex justify-center ">Learn more</p>
               <div className="flex flex justify-center">
                   <i><FiArrowDown/></i>
                
                 </div>
          
        </div>
        </div>

        </>

     
     )
    
 }