export default function Header() {
  return (
    <header className="grid grid-cols-2 bg-[#242424]">
      <section>
        <div className=" w-72">
          <img className=" invert brightness-[86%]" src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2014/09/Fleksjobber-Netv%C3%A6rket-logo_rgb.jpg" alt="Logo" />
        </div>
      </section>
      <section className="flex align-middle justify-center items-center">
        <button className=" text-xl font-bold px-8 py-4 bg-[#5BA6AB] text-[#FFF] rounded-[25px]">
          STØT OS <span className="text-[#5BA6AB]"> ..... </span> 💙
        </button>
      </section>
    </header>
  );
}
