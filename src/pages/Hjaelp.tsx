import { useState, useEffect } from "react";
import { fetchDataById } from "@/api/wp-rest";
export default function Hjaelp() {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    async function getPage() {
      const page = await fetchDataById(836, "pages");
      setHtml(page.content.rendered.replace(/<p>/g, "<p class='text-lg'>"));
    }
    getPage();
  }, []);

  return (
    <div>
      <div className="px-32 py-12">
        <h2 className="text-3xl">Hjælp</h2>
        <br />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}