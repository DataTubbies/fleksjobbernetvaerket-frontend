export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#242424] p-4 sm:p-6">
      <div className="w-36 sm:w-72">
        <img
          className="invert brightness-[86%] grayscale w-full"
          src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2014/09/Fleksjobber-Netv%C3%A6rket-logo_rgb.jpg"
          alt="Logo"
        />
      </div>
      <div>
        <a href="https://www.paypal.com/paypalme/fleksjob?country.x=DK&locale.x=da_DK">
          <button className="text-lg sm:text-xl font-bold px-4 sm:px-8 py-2 sm:py-4 bg-fleks-blue text-white rounded-[25px]">
            STØT OS <span className="text-xl sm:text-2xl"> ♡</span>
          </button>
        </a>
      </div>
    </header>
  );
}
