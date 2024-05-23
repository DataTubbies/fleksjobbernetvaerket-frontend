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
  };
}

export default function Jobmuligheder() {
  const [jobs, setJobs] = useState([] as Job[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getJobs() {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
        
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      setLoading(false);
    }
    getJobs();
  }, []);

  const colorBoxObj = {
    title: "JOBMULIGHEDER",
    description: "Her kan du finde seneste jobsopslag fra Fleksjobber Netværket. Vi opdaterer løbende med nye jobmuligheder, så hold øje med denne side, hvis du er på udkig efter et nyt job.",
    reversed: true,
  };

  return (
    <>
      <ColorBox {...colorBoxObj} />
  
  <div className="grid grid-cols-1 gap-8 py-8 mx-4 sm:mx-12 md:mx-32 my-10 rounded-sm">
  
    {jobs.map((job) => (
      <div className="p-4 prose" key={job.acf.jobtitel}>
        <p className="font-bold text-xl sm:text-2xl text-fleks-blue-dark my-0">{job.acf.jobtitel}</p>
        <p className="my-4 sm:my-7"><span className="font-semibold">Jobtype: </span>{job.acf.jobtype}</p>
        <p className="my-4 sm:my-7"><span className="font-semibold">Jobreference: </span>{job.acf.jobreference}</p>
        <p className="my-4 sm:my-7"> <span className="font-semibold">Jobbeskrivelse: </span>{job.acf.Jobbeskrivelse}</p>
        {job.acf.url && (
          <a className="font-semibold text-fleks-blue hover:underline" href={job.acf.url}>Læs mere her</a>
        )}
        
        <div className="bg-fleks-blue-dark h-[2px] w-full my-8"></div>
      </div>
    ))}
  
  </div>
  
    </>
  )
}
