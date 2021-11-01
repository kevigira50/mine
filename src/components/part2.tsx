import React from "react";
import {BsFillCartXFill}from "react-icons/bs";

export default function salarium() {
 return(

     <>

<div className="">
<p className="flex justify-center text-green-700 text-5xl"><b>how it works for employers</b></p>
    
</div>
<div className="flex justify-center pb-12 grid-cols-3 gap-5 py-12-px-24 text-2xl">
    <div className="rounded-3xl p-10">
    <p className="flex justify-center"><i><BsFillCartXFill/> </i>
    </p>
    <p className="bg-white border rounded-3xl p-10">
        no change to<br/>
         your payroll
        </p>
        </div>
        <div className="rounded-3xl p-10"> 
        <p className="flex justify-center"><i><BsFillCartXFill/> </i></p>
    <p className="bg-white border rounded-3xl p-10">
        no maintanance or<br/>
         implemantantions cost
        </p>
         </div>
         <div className="rounded-3xl p-10">
         <p className="flex justify-center"><i><BsFillCartXFill/> 
         </i></p>
    <p className="bg-white border rounded-3xl p-10">
        Bonus and client<br/>
        you payroll
        </p>
         </div>
        </div>
        
         <div className="flex justify-center pb-12 grid-cols-2 gap-5 py-12-px-24 text-2xl"> 
            <p className="bg-white border rounded-3xl p-10">no maintance or
                implementantions costs</p>
                <p className="bg-white border rounded-3xl p-10">Bonus and client
                    incentives</p>
        
        
        
        </div>
        <p className="flex justify-center text-green-700 text-5xl">
            <b>how it works for employees</b></p>
        <div className="flex justify-center pb-12 grid-cols-3 gap-5 py-6-px-12 text-2xl">
            <p className="bg-white border rounded-3xl p-10">
                no change avoid
                loan shark</p>
            <p className="bg-white border rounded-3xl p-10">no change avoid
                 loan shark</p>
            <p className="bg-white border rounded-3xl p-10">no change avoid</p>
            </div>
            
            </>
            
            )
 }