import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PostEntry({ title, excerpt, date, author, link, slug, img }) {
  const [postExcerpt, setPostExcerpt] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    try {
      setPostExcerpt(excerpt.substring(0, excerpt.indexOf("<a class")));
      setDateString(new Date(date).toLocaleDateString());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NavLink to={slug}>
      <div className="grid grid-cols-4 py-10 shadow-md rounded-lg px-12 sm:px-24 2xl:px-72">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-bold">{`📅${dateString}`}</h2>
          <img src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2023/10/Udvalgtbillede-150x150.png" alt="author" className="rounded w-44" />
        </div>
        <div className="relative col-span-4 md:col-span-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: postExcerpt }}></p>
          <div className="lg:absolute bottom-0">
            <div id="buttons" className="flex gap-1 mt-5">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="bg-fleks-blue text-white px-2 py-1 rounded-lg h-8">LÆS MERE</button>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${slug}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center">
                  <img src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/icons8-facebook-50.png" alt="facebook" className="w-6 h-6" />
                </button>
              </a>
              <a href={`https://x.com/intent/tweet?url=${link}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center">
                  <img src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/logo-black-294x300.png" alt="twitter" className="w-4 h-4" />
                </button>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center">
                  <img src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/linkedin-300x300.png" alt="linkedin" className="w-6 h-6" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
