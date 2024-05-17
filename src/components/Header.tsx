export default function Header() {
  return (
    <header className="grid grid-cols-2 bg-[#242424]">
      <section>
        <div className=" w-48 md:w-72">
          <img className=" invert brightness-[86%] grayscale" src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2014/09/Fleksjobber-Netv%C3%A6rket-logo_rgb.jpg" alt="Logo" />
        </div>
      </section>
      <section className="flex justify-center items-center">
        <button className=" text-md md:text-xl font-bold mt-4 md:mt-16 py-2 px-8 md:py-4 bg-fleks-blue text-white rounded-[25px]">
          STØT OS <span className="text-2xl"> ♡</span>
        </button>
      </section>
    </header>
  );
}
