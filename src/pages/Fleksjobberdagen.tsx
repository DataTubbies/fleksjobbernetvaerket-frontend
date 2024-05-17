import { fetchDataById, fetchDataByType } from "@/api/wp-rest";
import ColorBox from "@/components/ColorBox";
import { format } from "path";
import { useState, useEffect } from "react";

export default function Fleksjobberdagen() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchDataByType("fleksjobberdagen_new", "?_fields=acf").then((data) => {
      console.log(data[0].acf);
      createArrangorerImageArray(data[0].acf);
      createPolitikerArray(data[0].acf);
      createPartierImageArray(data[0].acf);
      setContent(data[0].acf);
    });
  }, []);

  return (
    <>
      <ColorBox title={content.bannerTitle} description={content.bannerText} reversed={false} />
      <div id="arrangorer" className="justify-items-center">
        <h1 className="text-xl font-bold text-center py-8">{content.arrangorerTitle}</h1>
        <div id="arrangorer-grid" className="grid grid-cols-1 px-12 md:grid-cols-2 lg:px-32 lg:grid-cols-4 gap-4 justify-items-center items-center">
          {content.arrangorerImages && content.arrangorerImages.map((img: string, index: number) => <img key={index} src={img} alt="arrangorer" className="max-w-full max-h-40 object-contain mx-auto" />)}
        </div>
      </div>
      <div id="poltikere" className="justify-items-center">
        <h1 className="text-xl font-bold text-center py-8">{content.politikereTitle}</h1>
        <div id="politikere-grid" className="grid grid-cols-1 px-12 md:grid-cols-2 lg:px-32 lg:grid-cols-4 gap-1 justify-items-center items-center">
          {content.politikere &&
            content.politikere.map((politiker: any, index: number) => (
              <div key={index} className="flex flex-col items-center bg-fleks-gray w-60 pb-3 h-60 items">
                <img src={politiker.img} alt="politiker" className="max-w-full max-h-40 object-contain mx-auto pb-2" />
                <p className="text-center">{politiker.text}</p>
              </div>
            ))}
        </div>
        <div id="partier" className="grid grid-cols-1 px-12 md:grid-cols-2 lg:px-32 lg:grid-cols-4 gap-4 justify-items-center items-center">
          {content.partiLogoer && content.partiLogoer.map((img: string, index: number) => <img key={index} src={img} alt="parti" className="max-w-full max-h-40 object-contain mx-auto" />)}
        </div>
      </div>
    </>
  );
}

function createArrangorerImageArray(data: any) {
  let imageArray = [];
  for (let i = 1; i < 10; i++) {
    if (data[`arrangorerImg${i}`]) {
      imageArray.push(data[`arrangorerImg${i}`]);
    }
    delete data[`arrangorerImg${i}`];
  }
  imageArray.filter((str) => str !== "");

  data.arrangorerImages = imageArray;
  return data;
}

function createPolitikerArray(data: any) {
  const array = [];
  for (let i = 1; i < 20; i++) {
    const politikerObj = {
      img: "",
      text: "",
    };
    if (data[`politikerImg${i}`]) {
      politikerObj.img = data[`politikerImg${i}`];
      politikerObj.text = data[`politikerText${i}`];
    }
    if (politikerObj.img !== "") {
      array.push(politikerObj);
    }
    delete data[`politikerText${i}`];
    delete data[`politikerImg${i}`];
  }
  array.filter((obj) => obj.img !== "");

  data.politikere = array;
  return data;
}

function createPartierImageArray(data: any) {
  let imageArray = [];
  for (let i = 1; i < 10; i++) {
    if (data[`partiLogo${i}`]) {
      imageArray.push(data[`partiLogo${i}`]);
    }
    delete data[`partiLogo${i}`];
  }
  imageArray.filter((str) => str !== "");

  data.partiLogoer = imageArray;
  return data;
}
