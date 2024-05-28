export interface PartnerGridProps {
  name: string;
  logo: string;
  link: string;
}

export default function PartnerGrid({ name, logo, link }: PartnerGridProps) {
  const content = (
    <div className="grid grid-rows-3 grid-cols-1 aspect-square">
      <div className="row-span-2 px-8 bg-[#232323] flex justify-center items-center align-middle">
        <img src={logo} alt="" />
      </div>
      <div className="row-span-1 bg-fleks-blue text-center text-white font-semibold flex justify-center items-center">
        <p className="md:text-2xl lg:text-4xl">{name}</p>
      </div>
    </div>
  );

  return link ? <a href={link}>{content}</a> : content;
}
