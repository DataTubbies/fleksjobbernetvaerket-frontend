import { fetchDataById } from "../api/wp-rest";
import { useEffect, useState } from "react";

export default function Ordbog() {
  const [content, setcontent] = useState("");

  useEffect(() => {
    fetchDataById(9746, "pages").then((data) => {
      console.log(data);
      let oldContent = data.content.rendered.replaceAll(
        "<span class='stackedheadtitlejt' style='font-weight:bold;'>Betydning/forklaring:</span>",
        ""
      );
      oldContent = oldContent.replaceAll(
        "<span class='stackedheadtitlejt' style='font-weight:bold;'>Ord/begreb:</span>",
        ""
      );

      setcontent(oldContent);
    });
  }, []);
  return (
    <div>
      <div
        className="px-8 font-bold "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
