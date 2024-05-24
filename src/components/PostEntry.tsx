import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

interface PostEntryProps {
  title: string;
  excerpt: string;
  date: string;
  author: number;
  link: string;
  slug: string;
}

export default function PostEntry({
  title,
  excerpt,
  date,
  link,
  slug,
}: PostEntryProps) {
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
    <NavLink to={`/artikler/${slug}`}>
      <div className="grid grid-cols-4 py-10 rounded-lg px-12 sm:px-24 2xl:px-72">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-bold">{`📅${dateString}`}</h2>
          <img
            src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2023/10/Udvalgtbillede-150x150.png"
            alt="author"
            className="rounded w-44"
          />
        </div>
        <div className="relative col-span-4 md:col-span-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: postExcerpt }}></p>
          <div className="lg:absolute bottom-0">
            <div id="buttons" className="flex gap-1 mt-5">
              <FacebookShareButton
                url={link}
                className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <img
                  src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/icons8-facebook-50.png"
                  alt="facebook"
                  className="w-6 h-6"
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={link}
                className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <img
                  src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/logo-black-294x300.png"
                  alt="twitter"
                  className="w-4 h-4"
                />
              </TwitterShareButton>

              <LinkedinShareButton
                url={link}
                className="bg-fleks-gray text-white px-1 py-1 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <img
                  src="https://www.fleksjobbernetvaerket.dk/wp-content/uploads/2024/05/linkedin-300x300.png"
                  alt="linkedin"
                  className="w-6 h-6"
                />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
