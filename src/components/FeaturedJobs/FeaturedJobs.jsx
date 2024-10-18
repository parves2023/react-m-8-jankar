import React, { useEffect, useState } from "react";
import Job from "../Job/Job.jsx";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDatalength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-7xl font-bold">Featured JObs {jobs.length}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          mollitia!
        </p>
      </div>

      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-5 my-6">
        {jobs.slice(0,dataLength).map((job) => {
          return <Job className="col-span-1" job={job} key={job.id}></Job>;
        })}
      </div>

      <div className={`flex justify-center my-5 ${dataLength === jobs.length && "hidden"}`}>
        <button onClick={()=> setDatalength(jobs.length)} className="btn btn-primary" > show All data</button>
      </div>
    </div>
  );
}

export default FeaturedJobs;
