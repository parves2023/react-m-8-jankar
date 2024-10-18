import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";

function Job({job}) {
    const {location,logo,id,job_title,address,email,phone,contact_information,experiences,educational_requirements,job_responsibility,job_description,salary,job_type,remote_or_onsite,company_name} = job;
    // console.log(logo);

    
  return (
    <div className='p-4 border rounded'>
        <img className='w-full h-40 p-5 border rounded object-cover' src={logo} alt="asdf" />
        <h1 className='text-3xl font-bold'>{job_title}</h1>
        <p>{company_name}</p>
        <div className='flex gap-4 p-3'>
            <button className='btn'>{remote_or_onsite}</button>
            <button className='btn'>{job_type}</button>
        </div>
        <div className='flex gap-4 p-3'>
            <p className='flex flex-col gap-2'><IoLocationOutline />{location}</p>
            <p className='flex flex-col gap-2'><TbCoinTaka />{salary}</p>
        </div>
        <button className='btn btn-primary'>View Details</button>
        
    </div>
  )
}

export default Job