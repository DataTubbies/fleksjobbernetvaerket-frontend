import { useEffect, useState } from "react";
import { fetchJobs } from "@/api/wp-rest";

interface Job {
  id: number;
  title: { rendered: string };
  content: { rendered: string, protected: boolean};
  
}

export default function Jobmuligheder() {

const [editedJobs, setEditedJobs] = useState("");
  const [jobs, setJobs] = useState({ content: { rendered: "" }, title: { rendered: ""}} as Job);

  useEffect(() => {
    async function getJobs() {
      try {
        fetchJobs().then((data) => {
          setJobs(data);
          console.log(data);
          console.log(jobs);
          
          
          
        });
      } catch (error) {
        console.error('Error fetching jobs:', error);
        
      }
    }
    getJobs();
    console.log(jobs);
    
  }, []);


  useEffect(() => {

    setEditedJobs(jobs.content.rendered.substring(jobs.content.rendered.indexOf("<h3><strong>Udgiv dine artikler"), jobs.content.rendered.indexOf("</p>\n<hr />\n<p>")));
  }
  , [jobs]);
  return (
<>
    <div className="grid grid-cols-3 bg-fleks-blue-light relative mx-32 my-10">
    <div className="col-span-1 py-12 p-8 bg-fleks-blue-dark text-fleks-yellow text-2xl">
     
      <span className="font-bold"> <h2>{jobs && jobs.title.rendered}</h2>
      </span>

    </div>
     </div>
    <div>{editedJobs ? <div dangerouslySetInnerHTML={{ __html: editedJobs }}></div> : null}</div> 
    </>
  );
}
