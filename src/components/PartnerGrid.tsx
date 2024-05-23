export default function PartnerGrid() {
  return (
    <div className=" px-32">
      <h2 className="py-14 text-5xl font-semibold text-fleks-blue-dark">VI TAKKER VORES SAMARBEJDSPARTNERE</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 py-10">
          <div className="grid grid-rows-3 grid-cols-1 aspect-square">
            <div className="row-span-2 px-8 bg-[#232323] flex justify-center items-center align-middle">
              <img src="../../public/images/plusren.png" alt="" />
            </div>
            <div className="row-span-1 md:pt-2 lg:pt-5 bg-fleks-blue text-center text-white font-semibold">
              <p className="md:text-2xl lg:text-4xl">PlusRen.dk</p>
              <p className="md:text-lg lg:text-2xl">Rengøring</p>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-cols-1 aspect-square">
            <div className="row-span-2 px-8 bg-[#232323] flex justify-center items-center align-middle">
              <img src="../../public/images/Company.png" alt="" />
            </div>
            <div className="row-span-1 md:pt-2 lg:pt-5 bg-fleks-blue text-center text-white font-semibold">
              <p className="md:text-2xl lg:text-4xl">Company</p>
              <p className="md:text-lg lg:text-2xl">Profession</p>
            </div>
          </div>
          <div>
            <div className="text-white aspect-square text-xl sm:text-3xl lg:text-5xl font-semibold text-center bg-fleks-blue flex align-middle items-center justify-center">
              <div>
                <h2 className="">Vil du være partner?</h2>
                <br />
                <h2>Læs mere her</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
