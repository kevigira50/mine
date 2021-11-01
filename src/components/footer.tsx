import React from "react";
import Images from '../../src/image/download icon.png';
import Images1 from '../../src/image/googleplay.png';

export default function salarium() {
 return(

     <>
     < div className="mx-auto">
         <div className="bg-green -200 mx-auto">
             <div className="grid grid-cols-4 gap-4 py-3 px-6 py-12 text-2xl">
            
           
             <div className=" ">
                 <p className="text-green-500 text -3xl pt-4 pr-96 ">
                 <b>salarium</b>
               </p>
                 <br/>
                 <p className="  text-base text-black-500">term of services</p>
                 <br/>
                 <p className=" text-base text-black-500">privacy
                 <br/>
                 </p>
                 </div>
                 
         
         <div>
             <p><b>resources</b></p><br/>
             <br/>
            
             <p className="text-base">benefits</p><br/>
             <p className="text-base">how it works</p><br/>
             <p className="text-base">FaQs</p><br/>
             <br/>
         </div>
         <div>
             <p><b>help</b></p><br/>
             <p className="text-base">salariuminfodesk@gmail.com</p>
             <p className="text-base">234819907055</p>
         </div>
         <div>
             <p><b>Download the app</b></p>
             <br/>
             <p>
                 <img src={Images} alt="image.jpg"/>
             </p>
             <br/>
         
         <p>
                 <img src={Images1} alt=' testing image'/>
             </p>
           
             </div>
             </div>
             </div>
             </div>
    
            <div className="">
             <p className="pl-20">
                 salarium is a registered .all rights reserved ,2021
             </p>
            
             </div>
             




   
</>

)

}