import { useState, useEffect } from "react";
import { fetchDataById } from "@/api/wp-rest";

export default function Persondatapolitik() {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function getPersondatapolitik() {
      const persondatapolitik = await fetchDataById(10166, "pages");
      setHtml(
        persondatapolitik.content.rendered
          .replace(/<p>/g, "<p class='text-lg'>")
          .replace(/<strong>/g, "<strong class='text-2xl'>")
      );
    }
    getPersondatapolitik();
  }, []);

  return (
    <div className="px-32 py-12">
      <h2 className="text-3xl">Persondatapolitik</h2>
      <br />
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
