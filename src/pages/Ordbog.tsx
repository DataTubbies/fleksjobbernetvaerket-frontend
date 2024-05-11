import { fetchDataById } from "../api/wp-rest";
import { useEffect, useState } from "react";

export default function Ordbog() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchDataById(9746, "pages").then((data) => {
      console.log(data);

      // Remove specific <p> tag with its content
      const cleanedContent = data.content.rendered.replace(
        /<p>[^<]*Der er mange begreber at holde styr på når du er visiteret til fleksjob og skal bevæge dig rundt i junglen af begreber, og måske hører du forskellige udlægninger af ordene &#8211; har du styr på hvad de betyder\? Herunder er en liste med langt de fleste ord der anvendes samt en beskrivelse af dem\.<\/p>/,
        ""
      );

      // Remove unwanted spans
      const cleanedContentWithoutSpans = cleanedContent
        .replaceAll(
          "<span class='stackedheadtitlejt' style='font-weight:bold;'>Betydning/forklaring:</span>",
          ""
        )
        .replaceAll(
          "<span class='stackedheadtitlejt' style='font-weight:bold;'>Ord/begreb:</span>",
          ""
        );

      // Set the cleaned HTML content to state
      setContent(cleanedContentWithoutSpans);
    });
  }, []);

  return (
    <div>
      <div className="relative w-[1411px] h-[331px]">
        {/* Background ellipse shape */}
        <div className="absolute w-[1411px] h-[331px] bg-yellow-100"></div>

        {/* Elliptical shape in the top-right corner */}
        <div className="absolute w-80 h-72 bg-fleks-blue-light rounded-br-full z-10"></div>

        {/* Text content overlapping the shape */}
        <div className="absolute left-[188px] top-[121px] w-[1184px] h-[143px] text-black text-lg font-medium font-inter z-20">
          Der er mange begreber at holde styr på når du er visiteret til
          fleksjob og skal bevæge dig rundt i junglen af begreber, og måske
          hører du forskellige udlægninger af ordene – har du styr på hvad de
          betyder? Herunder er en liste med langt de fleste ord der anvendes
          samt en beskrivelse af dem.
        </div>

        {/* Title text */}
        <div className="absolute left-[188px] top-[54px] w-[514px] h-[67px] text-teal-800 text-4xl font-semibold font-inter z-20">
          ORDBOGEN
        </div>
      </div>
      <br />
      <br />

      <div className="bg-fleks-blue-light h-3 w-full"></div>
      <br />
      <br />

      <img
        className="w-[30px] h-[29px]"
        src="https://via.placeholder.com/30x29"
      />
      {/* Content displayed with dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <br />
      <br />

      <div className="bg-fleks-blue-light h-3 w-full"></div>
      <br />
      <br />
    </div>
  );
}
