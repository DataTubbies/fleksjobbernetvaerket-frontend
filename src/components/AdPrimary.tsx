interface AdPrimaryProps {
  primaryName: string | undefined;
  primaryImage: string | undefined;
  primaryText: string | undefined;
}

export default function AdPrimary({ primaryName, primaryImage, primaryText }: AdPrimaryProps) {
  return (
    <div className="bg-fleks-blue-dark text-white text-center p-4">
      <h1 className="text-xl">{primaryName}</h1>
      <img src={primaryImage} className="mx-auto" />
      <p>{primaryText}</p>
    </div>
  );
}
