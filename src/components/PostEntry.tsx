import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PostEntry({ id, title, excerpt, date, author, link, slug, thumbnail }) {
  const [postExcerpt, setPostExcerpt] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    try {
      console.log(excerpt);
      setPostExcerpt(excerpt.substring(0, excerpt.indexOf("<a class")));
      setDateString(new Date(date).toLocaleDateString());
      console.log(postExcerpt);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NavLink to={`/artikler/${slug}`}> {/* Use article slug in the link */}
      <div className="grid grid-cols-4 my-10 px-12 shadow-md rounded-lg lg:px-32">
        <div className="col-span-1">
          <h2 className="text-lg font-bold">📅{dateString}</h2>
          <img src={thumbnail} alt="author" className="rounded w-44" />
        </div>
        <div className="col-span-4 md:col-span-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: postExcerpt }}></p>
          <div id="buttons" className="flex gap-1 mt-5">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="bg-fleks-blue text-white px-2 py-1 rounded-lg h-8">LÆS MERE</button>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank" rel="noopener noreferrer">
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
    </NavLink>
  );
}
