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
        console.log(jobs);
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
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div className="border border-fleks-grey p-4 rounded-lg shadow-md" key={job.acf.jobtitel}>
                <h2 className="font-bold text-xl text-fleks-blue-dark">{job.acf.jobtitel}</h2>
                <p className="my-2"><span className="font-semibold">Jobtype: </span>{job.acf.jobtype}</p>
                <p className="my-2"><span className="font-semibold">Jobreference: </span>{job.acf.jobreference}</p>
                <p className="my-2"><span className="font-semibold">Jobbeskrivelse: </span>{job.acf.Jobbeskrivelse}</p>
                {job.acf.url && (
                  <a className="font-semibold text-fleks-blue hover:underline" href={job.acf.url}>Læs mere her</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
