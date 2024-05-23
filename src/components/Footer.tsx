import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="h-40 bg-[#242424] text-white">
      <div className="md:float-right mr-32 mt-14">
        <p>
          © 2024 - Alle rettigheder forbeholdes Fleksjobber Netværket - CVR-nr:
          37109223
        </p>
        <br />
        <p className="md:float-right">
          <Link to={"/persondatapolitik"}>
            <span className="hover:underline">Persondata- </span>
          </Link>
          og{" "}
          <Link to={"/cookiepolitik"}>
            <span className="hover:underline">Cookiepolitik </span>
          </Link>{" "}
          |{" "}
          <Link to={"/hjaelp"}>
            <span className="hover:underline">Hjælp</span>
          </Link>{" "}
          | InSider |{" "}
          <Link to={"/om"}>
            <span className="hover:underline">Om...</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}
