export default function Om() {
  return (
    <div className="px-32 py-12">
      <h1 className="text-3xl">Om os</h1>
      <div className="text-center">
        <h2 className="text-fleks-blue-dark text-2xl font-semibold">Fleksjobber Netværket</h2>
        <p className="text-fleks-gray-dark text-sm">c/o Knud Kjølhede Petersen</p>
        <p>Brøndbyøster Torv 47 6th DK 2605 Brøndby</p>
        <p>Telefon +4520253402</p>
        <p>Hjemmeside: https://www.fleksjobbernetvaerket.dk</p>
        <p>E-mail: info@fleksjobbernetvaerket.dk</p>
        <div className="flex justify-center items-center">
          <img className="w-96" src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2014/09/Fleksjobber-Netv%C3%A6rket-logo_rgb.jpg" alt="" />
        </div>
        <p>
          SE/CVR nummer: 37109223 - Se data på cvr.dk via dette{" "}
          <a className="text-fleks-blue-dark" href="https://cvrapi.dk/virksomhed/dk/fleksjobber-netvaerket/37109223">
            link.
          </a>
        </p>
      </div>
    </div>
  );
}
