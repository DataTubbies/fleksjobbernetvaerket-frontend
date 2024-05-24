import { useState, useEffect } from "react";

interface ReklamePrimaryProps {
  primaryName: string;
  primaryImage: string;
  primaryText: string;
}

export default function ReklamePrimary({ primaryName, primaryImage, primaryText }: ReklamePrimaryProps) {
  return (
    <div className="bg-fleks-blue-dark text-white text-center p-4">
      <h1 className="text-xl">{primaryName}</h1>
      <img src={primaryImage} className="mx-auto" />
      <p>{primaryText}</p>
    </div>
  );
}
