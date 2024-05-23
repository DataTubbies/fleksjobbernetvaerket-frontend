import { useState, useEffect } from "react";
import { fetchDataById } from "@/api/wp-rest";

export default function Cookiepolitik() {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function getCookiepolitik() {
      const cookiepolitik = await fetchDataById(10168, "pages");
      setHtml(
        cookiepolitik.content.rendered
          .replace(/<p>/g, "<p class='text-lg'>")
          .replace(/<strong>/g, "<strong class='text-2xl'>")
      );
    }
    getCookiepolitik();
  }, []);

  return (
    <div className="px-32 py-12">
      <h2 className="text-3xl">Cookiepolitik</h2>
      <div className="bg-fleks-blue h-1 w-full my-8"></div>

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
      <div className="bg-fleks-blue h-1 w-full my-8"></div>
    </div>
  );
}
