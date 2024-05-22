import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownGrid: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-11-12") - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex md:justify-end">
      <article className="grid w-full grid-rows-2 md:grid-rows-1 md:grid-cols-2 border-b-8 border-fleks-yellow">
        <section className="order-2 md:order-1 flex justify-center align-middle items-center md:px-32 text-fleks-blue-dark">
          <div>
            <h2 className="px-8 pb-2 md:pt-2 text-4xl font-bold">FIND MERE INFO</h2>
            <ul className="px-8 underline text-2xl">
              <NavLink to="/artikler">
                <li className="hover:text-fleks-blue">Artikler</li>
              </NavLink>
              <NavLink to="/ordbog">
                <li className="hover:text-fleks-blue">Ordbogen</li>
              </NavLink>
              <NavLink to="/links">
                <li className="hover:text-fleks-blue">Links og henvisninger</li>
              </NavLink>
              <NavLink to="/mangfoldighedsklubben">
                <li className="hover:text-fleks-blue">Mangfoldighedsklubben</li>
              </NavLink>
            </ul>
            <div className="px-8 mt-12 flex justify-center gap-4">
              <img className="w-14" src="../../public/images/facebook.svg" alt="" />
              <img className="w-14" src="../../public/images/instagram.svg" alt="" />
              <img className="w-14" src="../../public/images/linkedin.svg" alt="" />
              <img className="w-14" src="../../public/images/rs-feed.svg" alt="" />
              <img className="w-14" src="../../public/images/youtube.svg" alt="" />
            </div>
          </div>
        </section>
        <div className="order-1 md:order-2 flex md:justify-end">
          <section className="float-right lg:w-[600px] bg-fleks-blue-dark text-white">
            <h2 className="p-8 text-4xl font-semibold">FLEKSJOBBERDAGEN</h2>
            <div className="p-8 text-4xl font-semibold bg-fleks-blue text-fleks-blue-dark">
              <p>
                {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
              </p>
              <p>D : T : M : S</p>
              <p className="text-3xl">Dage til næste omgang!</p>
            </div>
            <div className="p-8 text-3xl font-semibold">
              <p>Kampdag for diversitet og lighed.</p>
              <p>Anden tirsdag i november - hvert år!</p>
            </div>
            <div className="bg-fleks-yellow">
              <p className="text-center py-6 text-fleks-blue-dark text-xl font-semibold">Læs mere</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default CountdownGrid;
