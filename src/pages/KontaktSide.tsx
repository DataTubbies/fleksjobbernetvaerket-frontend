import Kontaktform from "@/components/Kontaktform";

export default function Kontakt() {
  return (
    <>
      <div className="bg-fleks-blue h-1 w-full my-8 "></div>
      <div className=" justify-center text-center px-32 py-12">
        <h1 className="text-3xl text-fleks-blue-dark font-bold">
          Kontakt Fleksjobber Netværket
        </h1>
        <p className="text-xl font-semibold my-2">
          Udfyld felterne for at kontakte netværket
        </p>
      </div>
      <Kontaktform />
    </>
  );
}
