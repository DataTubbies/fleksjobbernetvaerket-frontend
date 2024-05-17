import { useEffect, useState } from "react";
import { fetchJobs } from "@/api/wp-rest";
import ColorBox from "@/components/ColorBox";

interface Job {
acf: {
  jobtitel: string;
  Jobbeskrivelse: string;
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

  const colorBoxObj = {
    title: "JOBMULIGHEDER",
    description: "Her kan du finde seneste jobsopslag fra Fleksjobber Netværket. Vi opdaterer løbende med nye jobmuligheder, så hold øje med denne side, hvis du er på udkig efter et nyt job.",
    reversed: true,
  };

  return (
<>
      <ColorBox {...colorBoxObj} />
  
  <div className="grid grid-cols-1 grid-rows-2 justify-center py-8 mx-12 md:mx-32 my-10 shadow-md rounded-sm">

      {jobs.map((job) => (
        <div className="border-solid border-b-4 border-fleks-grey" key={job.acf.jobtitel}>
          <p className="font-bold text-2xl text-fleks-blue-dark my-0">{job.acf.jobtitel}</p>
          <p className="my-7"><span className="font-semibold">Jobtype: </span>{job.acf.jobtype}</p>
          <p className="my-7"><span className="font-semibold">Jobreference: </span>{job.acf.jobreference}</p>


          <p className="my-7"> <span className="font-semibold">Jobbeskrivelse: </span>{job.acf.Jobbeskrivelse}</p>
          {job.acf.url && (
              <a className="font-semibold" href={job.acf.url}>Læs mere her</a>
            )}
        </div>
      

      ))}
      </div>

    </>
  );
}
