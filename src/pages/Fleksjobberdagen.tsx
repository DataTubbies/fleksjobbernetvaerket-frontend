import { fetchDataById } from "@/api/wp-rest";
import { useState, useEffect } from "react";

export default function Fleksjobberdagen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchDataById(14775, "pages", "?_fields=content,slug,date,id,title").then((data) => {
      console.log(data);

      if (data) {
        setContent(cleanData(data.content.rendered));
        setTitle(data.title.rendered);
      }
    });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function cleanData(data) {
  console.log(data);

  // Remove class="pbs-row"
  data = data.replaceAll('class="pbs-row"', "");

  return data;
}
