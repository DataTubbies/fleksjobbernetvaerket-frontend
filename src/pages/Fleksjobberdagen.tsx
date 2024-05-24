import { fetchDataByType } from "@/api/wp-rest";
import ColorBox from "@/components/ColorBox";
import { useState, useEffect } from "react";

interface FleksjobberdagenType {
  bannerTitle: string;
  bannerText: string;
  arrangorerTitle: string;
  arrangorerImages: string[];
  politikereTitle: string;
  politikere: politiker[];
  partiLogoer: string[];
  tilmeldTitle: string;
  tilmeldPunkter: string[];
  tilmeldArrangorerLink: string;
  laesMereLink: string;
  [key: string]: string | string[] | undefined | politiker[]; // Index signature with more precise type
}

interface politiker {
  img: string;
  text: string;
}

export default function Fleksjobberdagen() {
  const [content, setContent] = useState<FleksjobberdagenType>({} as FleksjobberdagenType);

  useEffect(() => {
    fetchDataByType("fleksjobberdagen_new", "?_fields=acf").then((data) => {
      console.log(data[0].acf);
      createArrangorerImageArray(data[0].acf);
      createPolitikerArray(data[0].acf);
      createPartierImageArray(data[0].acf);
      createtilmeldPunkterArray(data[0].acf);
      setContent(data[0].acf);
    });
  }, []);

  return (
    <>
      <ColorBox title={content.bannerTitle} description={content.bannerText} reversed={false} boldText="" />
      <div id="arrangorer" className="justify-items-center">
        <h1 className="text-xl font-bold text-center py-8 px-12 lg:px-32">{content.arrangorerTitle}</h1>
        <div id="arrangorer-grid" className="grid grid-cols-1 px-12 md:grid-cols-2 lg:px-32 lg:grid-cols-4 gap-4 justify-items-center items-center">
          {content.arrangorerImages && content.arrangorerImages.map((img: string, index: number) => <img key={index} src={img} alt="arrangorer" className="max-w-full max-h-40 object-contain mx-auto" />)}
        </div>
      </div>
      <div id="poltikere" className="justify-items-center">
        <h1 className="text-xl font-bold text-center py-8 px-12 lg:px-32">{content.politikereTitle}</h1>
        <div id="politikere-grid" className="grid grid-cols-1 px-12 md:grid-cols-3 lg:px-32 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-1 justify-items-center items-center">
          {content.politikere &&
            content.politikere.map((politiker: politiker, index: number) => (
              <div key={index} className="flex flex-col w-48 pb-3 h-60 rounded">
                <img src={politiker.img} alt="politiker" className="max-w-full max-h-40 object-contain mx-auto py-2" />
                <p className="text-center inset-x-0 bottom-0">{politiker.text}</p>
              </div>
            ))}
        </div>
        <div id="partier" className="grid grid-cols-1 px-12 md:grid-cols-2 lg:px-32 lg:grid-cols-4 gap-4 justify-items-center items-center py-3">
          {content.partiLogoer && content.partiLogoer.map((img: string, index: number) => <img key={index} src={img} alt="parti" className="max-w-full max-h-40 object-contain mx-auto" />)}
        </div>
        <div className="bg-fleks-yellow h-1 w-full my-8 px-32"></div>

        <div id="tilmeld" className="grid grid-cols-1 justify-items-center px-12 py-5 lg:px-32">
          <a href={content.tilmeldArrangorerLink} className="bg-fleks-blue text-white font-bold py-2 px-4 rounded-full">
            Tilmeld dig som arrangør her
          </a>
          <h1 className="text-xl font-bold text-center py-8">{content.tilmeldTitle}</h1>
          <ol>
            {content.tilmeldPunkter &&
              content.tilmeldPunkter.map((punkt: string, index: number) => (
                <li key={index} className="py-2">
                  &#8226; {punkt}
                </li>
              ))}
          </ol>
          <p className="text-center py-3">
            <a href={content.laesMereLink}>
              <u>Læs mere om fleksjobberdagen</u>
            </a>{" "}
            og gå til{" "}
            <a href={content.tilmeldArrangorerLink}>
              <u>tilmelding for arrangører her.</u>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

// There is a duplicate function later. Might aswell combine that to a single..
function createArrangorerImageArray(data: FleksjobberdagenType): FleksjobberdagenType {
  const imageArray: string[] = [];
  for (let i = 1; i < 10; i++) {
    const key = `arrangorerImg${i}`;
    const img = data[key] as string | undefined; // Use more precise type
    if (img) {
      imageArray.push(img);
    }
    delete data[key]; // Use type assertion to handle dynamic keys
  }

  data.arrangorerImages = imageArray;
  return data;
}

function createPolitikerArray(data: FleksjobberdagenType): FleksjobberdagenType {
  const array: politiker[] = [];
  for (let i = 1; i < 20; i++) {
    const imgKey = `politikerImg${i}`;
    const textKey = `politikerText${i}`;
    const politikerObj: politiker = {
      img: (data[imgKey] as string) || "",
      text: (data[textKey] as string) || "",
    };
    if (politikerObj.img !== "") {
      array.push(politikerObj);
    }
    delete data[imgKey];
    delete data[textKey];
  }

  data.politikere = array;
  return data;
}

function createPartierImageArray(data: FleksjobberdagenType): FleksjobberdagenType {
  const imageArray: string[] = [];
  for (let i = 1; i < 10; i++) {
    const key = `partiLogo${i}`;
    const img = data[key] as string | undefined; // Use more precise type
    if (img) {
      imageArray.push(img);
    }
    delete data[key]; // Use type assertion to handle dynamic keys
  }

  data.partiLogoer = imageArray;
  return data;
}

function createtilmeldPunkterArray(data: FleksjobberdagenType): FleksjobberdagenType {
  const punkterArray: string[] = [];
  for (let i = 1; i < 10; i++) {
    const key = `tilmeldPunkt${i}`;
    const punkt = data[key] as string | undefined; // Use more precise type
    if (punkt) {
      punkterArray.push(punkt);
    }
    delete data[key]; // Use type assertion to handle dynamic keys
  }

  data.tilmeldPunkter = punkterArray;
  return data;
}
