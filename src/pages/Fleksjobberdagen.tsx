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
        setTitle(cleanTitle(data.title.rendered));
      }
    });
  }, []);

  return (
    <div>
      <h1 class="text-center pt-5">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function cleanData(data) {
  console.log(data);

  // Fjern class from primær div
  data = data.replaceAll("pbs-main-wrapper", "justify-center");

  // styling til banner
  data = data.replaceAll("aligncenter wp-image-14510 size-full", "mx-auto");

  // div til "Arrangører på #fleksjobberdagen"
  data = data.replaceAll('class="pbs-row" style="min-height: 200px;"', 'class="grid grid-cols-4 gap-4 px-6 items-center"');
  // div til enkelte arrangører
  data = data.replaceAll('"pbs-col" style="flex-basis: 25%; justify-content: center;"', '""');
  data = data.replaceAll('"pbs-col" style="flex-grow: 1; justify-content: center; flex-basis: 25%;"', '""');

  // Padding til "Arrangører på #fleksjobberdagen – tirsdag den 12. november 2024
  data = data.replaceAll('style="text-align: center;"', 'class="pb-4 text-center"');

  // Grid til politikerbilleder
  data = data.replaceAll("pbs-row pbs-shadow-simple-4-3", "px-5 grid grid-cols-4 gap-4 drop-shadow-md justify-center");

  // Styling til politikerbilleder
  data = data.replaceAll("size-medium", "");
  data = data.replaceAll('style="width: 310px"', "");
  data = data.replaceAll("wp-caption aligncenter", "justify-center");
  data = data.replaceAll('style="flex-basis: 25%; justify-content: center; padding-top: 31px;"', "");

  // Grid til partibilleder
  data = data.replaceAll("pbs-row", "grid grid-cols-4 gap-4 justify-center px-6 pt-6");

  // Styling til partibilleder
  data = data.replaceAll('style="min-height: 200px; margin-bottom: 53px; margin-top: 24px;"', "");

  data = data.replaceAll('style="min-height: 172px; margin-top: -20px;"', "");

  return data;
}

function cleanTitle(title) {
  title = title.replaceAll("&#8211;", "-");
  return title;
}
