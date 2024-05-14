import React, { useEffect, useState } from "react";
import { fetchDataById } from "../api/wp-rest";
import ColorBox from "../components/ColorBox";

export default function Ordbog() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchDataById(9746, "pages").then((data) => {
      console.log(data);

      const cleanedContent = data.content.rendered.replace(
        /<p>[^<]*Der er mange begreber at holde styr på når du er visiteret til fleksjob og skal bevæge dig rundt i junglen af begreber, og måske hører du forskellige udlægninger af ordene &#8211; har du styr på hvad de betyder\? Herunder er en liste med langt de fleste ord der anvendes samt en beskrivelse af dem\.<\/p>/,
        ""
      );

      const cleanedContentWithoutSpans = cleanedContent
        .replaceAll(
          "<span class='stackedheadtitlejt' style='font-weight:bold;'>Betydning/forklaring:</span>",
          ""
        )
        .replaceAll(
          "<span class='stackedheadtitlejt' style='font-weight:bold;'>Ord/begreb:</span>",
          ""
        );

      setContent(cleanedContentWithoutSpans);
    });
  }, []);

  const colorBoxObj = {
    title: "ORDBOGEN",
    boldText: "Ordbogen",
    description:
      "Der er mange begreber at holde styr på når du er visiteret til fleksjob og skal bevæge dig rundt i junglen af begreber, og måske hører du forskellige udlægninger af ordene – har du styr på hvad de betyder? Herunder er en liste med langt de fleste ord der anvendes samt en beskrivelse af dem.",
    reversed: false,
  };

  return (
    <>
      <ColorBox
        title={colorBoxObj.title}
        boldText={colorBoxObj.boldText}
        description={colorBoxObj.description}
        reversed={colorBoxObj.reversed}
      />

      <br />

      <div className="bg-fleks-blue-light h-2 w-full"></div>
      <br />

      <div style={{ padding: "60px" }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <br />

      <div className="bg-fleks-blue-light h-2 w-full"></div>
      <br />
      <br />
    </>
  );
}
