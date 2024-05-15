import { useEffect, useState } from "react";
import { fetchJobs } from "@/api/wp-rest";

interface Job {
acf: {
  jobtitel: string;
  jobeskrivelse: string;
  jobtype: string;
  jobreference: string;
  url: string;
}
}
  


export default function Jobmuligheder() {

  const [jobs, setJobs] = useState( [] as Job[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getJobs() {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
        
        // fetchJobs().then((data) => {
        //   console.log(data);
          
        //   setJobs(data);

        //   setLoading(false);
          
        // });
        console.log(jobs);

      } catch (error) {
        console.error('Error fetching jobs:', error);
        
      }
    }
    getJobs() 
    setLoading(false)
    
  }, []);


  return (
<>
   
      {jobs.map((job) => (
        <div key={job.acf.jobtitel}>
          <p>{job.acf.jobtitel}</p>
          <p>{job.acf.jobeskrivelse}</p>
          <p>{job.acf.jobtype}</p>
          <p>{job.acf.jobreference}</p>
          <a href={job.acf.url}>{job.acf.url}</a>
        </div>
      ))}
   
    </>
  );
}
