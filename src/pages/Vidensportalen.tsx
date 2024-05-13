import ColorBox from "../components/ColorBox";
import VidensportalEntry from "@/components/VidensportalEntry";

export default function Vidensportalen() {
  const artikelEntryObj = {
    title: "Artikler",
    subtitle: "indeholder emner som: ",
    li: [
      "Ansættelse",
      "Opsigelse",
      "Kontrakter",
      "Hjælpemidler",
      "Bisidderordning",
      "Mm.",
    ],
    description:
      "Hver artikel er kategoriseret med det man i online-verden kalder for tags, eller søge-ord (altså links der henleder én til artikler og lignende der indeholder disse).",
    svg: (
      <svg
        width="163"
        height="153"
        viewBox="0 0 163 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.4844 16.3929C49.2502 16.3929 45.8437 20.0471 45.8437 24.5893V128.411C45.8437 131.279 45.398 134.046 44.5385 136.607H140.078C144.312 136.607 147.719 132.953 147.719 128.411V24.5893C147.719 20.0471 144.312 16.3929 140.078 16.3929H53.4844ZM22.9219 153C10.2512 153 0 142.003 0 128.411V27.3214C0 22.7792 3.40645 19.125 7.64062 19.125C11.8748 19.125 15.2812 22.7792 15.2812 27.3214V128.411C15.2812 132.953 18.6877 136.607 22.9219 136.607C27.1561 136.607 30.5625 132.953 30.5625 128.411V24.5893C30.5625 10.9969 40.8137 0 53.4844 0H140.078C152.749 0 163 10.9969 163 24.5893V128.411C163 142.003 152.749 153 140.078 153H22.9219ZM56.0312 35.5179C56.0312 30.9757 59.4377 27.3214 63.6719 27.3214H94.2344C98.4686 27.3214 101.875 30.9757 101.875 35.5179V62.8393C101.875 67.3815 98.4686 71.0357 94.2344 71.0357H63.6719C59.4377 71.0357 56.0312 67.3815 56.0312 62.8393V35.5179ZM119.703 27.3214H129.891C134.125 27.3214 137.531 30.9757 137.531 35.5179C137.531 40.06 134.125 43.7143 129.891 43.7143H119.703C115.469 43.7143 112.062 40.06 112.062 35.5179C112.062 30.9757 115.469 27.3214 119.703 27.3214ZM119.703 54.6429H129.891C134.125 54.6429 137.531 58.2971 137.531 62.8393C137.531 67.3815 134.125 71.0357 129.891 71.0357H119.703C115.469 71.0357 112.062 67.3815 112.062 62.8393C112.062 58.2971 115.469 54.6429 119.703 54.6429ZM63.6719 81.9643H129.891C134.125 81.9643 137.531 85.6185 137.531 90.1607C137.531 94.7029 134.125 98.3571 129.891 98.3571H63.6719C59.4377 98.3571 56.0312 94.7029 56.0312 90.1607C56.0312 85.6185 59.4377 81.9643 63.6719 81.9643ZM63.6719 109.286H129.891C134.125 109.286 137.531 112.94 137.531 117.482C137.531 122.024 134.125 125.679 129.891 125.679H63.6719C59.4377 125.679 56.0312 122.024 56.0312 117.482C56.0312 112.94 59.4377 109.286 63.6719 109.286Z"
          fill="white"
        />
      </svg>
    ),
  };

  const linksEntryObj = {
    title: "Links og henvisninger",
    subtitle: "til:",
    li: [
      "Jobcentre",
      "Andre aktører",
      "Jobdatabaser",
      "Arkiver",
      "Materiale der omhandler arbejdsmarkedet",
    ],
    description:
      "Har du selv links der er relevante kan du kvit og frit uploade det til vores system. Mangler der nogen, så kontakt Fleksjobber Netværket og gør os opmærksomme på det. Du kan kontakte os både som virksomhed og privatperson her.",
    svg: (
      <svg
        width="173"
        height="143"
        viewBox="0 0 173 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M160.87 75.0574C177.043 57.8784 177.043 30.0574 160.87 12.8783C146.557 -2.32444 124 -4.3008 107.54 8.19584L107.082 8.5303C102.96 11.6621 102.015 17.7432 104.964 22.0911C107.912 26.4391 113.637 27.4729 117.731 24.3411L118.189 24.0067C127.378 17.0438 139.944 18.1384 147.902 26.6215C156.919 36.1993 156.919 51.706 147.902 61.2838L115.784 95.4595C106.767 105.037 92.1679 105.037 83.1508 95.4595C75.1642 86.9764 74.1337 73.6284 80.689 63.8986L81.0038 63.4121C83.9523 59.0338 82.979 52.9527 78.8855 49.8513C74.792 46.75 69.0383 47.7533 66.1184 52.1013L65.8036 52.5878C54.0097 70.0405 55.8704 94 70.1833 109.203C86.3569 126.382 112.549 126.382 128.723 109.203L160.87 75.0574ZM12.1302 67.9426C-4.04339 85.1216 -4.04339 112.943 12.1302 130.122C26.4431 145.324 49.0002 147.301 65.46 134.804L65.9181 134.47C70.0402 131.338 70.9848 125.257 68.0364 120.909C65.0879 116.561 59.3627 115.527 55.2693 118.659L54.8112 118.993C45.6224 125.956 33.0556 124.862 25.0977 116.378C16.0805 106.77 16.0805 91.2635 25.0977 81.6858L57.2158 47.5405C66.2329 37.9628 80.8321 37.9628 89.8492 47.5405C97.8358 56.0236 98.8663 69.3716 92.311 79.1318L91.9962 79.6183C89.0477 83.9966 90.021 90.0777 94.1145 93.1791C98.208 96.2804 103.962 95.2771 106.882 90.9291L107.196 90.4426C118.99 72.9595 117.13 49 102.817 33.7972C86.6431 16.6182 60.4505 16.6182 44.277 33.7972L12.1302 67.9426Z"
          fill="white"
        />
      </svg>
    ),
  };

  const ordbogEntryObj = {
    title: "Ordbog",
    subtitle: "til emner som:",
    li: [
      "Arbejdsevne",
      "Helhedsorienteret indsats.",
      "Ressourceforløbsydelse",
      "VITAS",
    ],
    description:
      "Der er mange begreber at holde styr på når du er visiteret til fleksjob og skal bevæge dig rundt i junglen af begreber, og måske hører du forskellige udlægninger af ordene . Har du styr på hvad de betyder? Herunder er en liste med langt de fleste ord der anvendes samt en beskrivelse af dem.",
    svg: (
      <svg
        width="170"
        height="151"
        viewBox="0 0 170 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.0508 0C29.2431 0 25.7897 2.3005 24.3434 5.81025L4.65588 53L0.730184 62.438C-1.27694 67.2455 0.995834 72.7608 5.80702 74.7663C10.6182 76.7719 16.1378 74.5009 18.1449 69.6934L19.6798 66.0657H46.4513L47.9566 69.6934C49.9637 74.5009 55.4833 76.7719 60.2945 74.7663C65.1057 72.7608 67.3785 67.2455 65.3713 62.438L61.4456 53L41.7581 5.81025C40.3118 2.3005 36.8584 0 33.0508 0ZM38.5703 47.1898H27.5312L33.0508 33.9767L38.5703 47.1898ZM75.5545 9.43796V37.7518V66.0657C75.5545 71.2861 79.7754 75.5037 84.9998 75.5037H108.613C121.659 75.5037 132.226 64.945 132.226 51.9088C132.226 45.0958 129.334 38.9906 124.729 34.6845C126.5 31.3812 127.504 27.606 127.504 23.5949C127.504 10.5587 116.937 0 103.89 0H84.9998C79.7754 0 75.5545 4.21759 75.5545 9.43796ZM103.89 28.3139H94.4451V18.8759H103.89C106.488 18.8759 108.613 20.9995 108.613 23.5949C108.613 26.1903 106.488 28.3139 103.89 28.3139ZM94.4451 47.1898H103.89H108.613C111.21 47.1898 113.336 49.3133 113.336 51.9088C113.336 54.5042 111.21 56.6278 108.613 56.6278H94.4451V47.1898ZM167.233 91.6072C170.922 87.9205 170.922 81.9333 167.233 78.2466C163.543 74.5599 157.551 74.5599 153.862 78.2466L103.89 128.209L82.2253 106.56C78.5357 102.874 72.5439 102.874 68.8543 106.56C65.1647 110.247 65.1647 116.234 68.8543 119.921L97.1901 148.235C100.88 151.922 106.872 151.922 110.561 148.235L167.233 91.6072Z"
          fill="white"
        />
      </svg>
    ),
  };

  return (
    <>
      <ColorBox />
      <VidensportalEntry
        title={artikelEntryObj.title}
        subtitle={artikelEntryObj.subtitle}
        li={artikelEntryObj.li}
        description={artikelEntryObj.description}
        svg={artikelEntryObj.svg}
      />
      <VidensportalEntry
        title={linksEntryObj.title}
        subtitle={linksEntryObj.subtitle}
        li={linksEntryObj.li}
        description={linksEntryObj.description}
        svg={linksEntryObj.svg}
      />
      <VidensportalEntry
        title={ordbogEntryObj.title}
        subtitle={ordbogEntryObj.subtitle}
        li={ordbogEntryObj.li}
        description={ordbogEntryObj.description}
        svg={ordbogEntryObj.svg}
      />
    </>
  );
}
