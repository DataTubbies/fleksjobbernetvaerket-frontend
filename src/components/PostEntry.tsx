import { useState, useEffect } from "react";

export default function PostEntry({ title, excerpt, date, author }) {
  const [postExcerpt, setPostExcerpt] = useState("");

  useEffect(() => {
    try {
      console.log(excerpt);

      setPostExcerpt(excerpt.substring(0, excerpt.indexOf("<a class")));
      console.log(postExcerpt);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className=" my-10 mx-48 p-4 shadow-md rounded-lg">
        <h2 className="text-lg">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: postExcerpt }}></p>
        <button className="bg-[#5BA6AB] text-white px-7 py-1 rounded-lg mt-5">LÆS MERE</button>
      </div>
    </>
  );
}
