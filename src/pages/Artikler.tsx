import { fetchPosts, fetchTags, fetchImgById } from "@/api/wp-rest";
import { useState, useEffect } from "react";
import PostEntry from "@/components/PostEntry";

interface PostType {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  author: number;
  link: string;
  slug: string;
}

export default function Artikler() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [tags, setTags] = useState<string[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<PostType[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sortedPosts = [...searchedPosts].sort((a, b) => {
      const ordA = a.title.rendered.toLowerCase();
      const ordB = b.title.rendered.toLowerCase();

      if (newDirection === "asc") {
        return ordA < ordB ? -1 : ordA > ordB ? 1 : 0;
      } else {
        return ordA > ordB ? -1 : ordA < ordB ? 1 : 0;
      }
    });

    setSearchedPosts(sortedPosts);
  };

  const handleDateSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sortedPosts = [...searchedPosts].sort((a, b) => {
      const ordA = a.date;
      const ordB = b.date;

      if (newDirection === "asc") {
        return ordA < ordB ? -1 : ordA > ordB ? 1 : 0;
      } else {
        return ordA > ordB ? -1 : ordA < ordB ? 1 : 0;
      }
    });

    setSearchedPosts(sortedPosts);
  };

  useEffect(() => {
    async function getPosts(page: number) {
      const data = await fetchPosts(page);
      setPosts(data);
      setSearchedPosts(data);
      console.log(posts);
    }
    getPosts(1);
  }, []);

  useEffect(() => {
    async function getTags() {
      const data = await fetchTags();
      setTags(data);
    }
    getTags();
  }, []);

  useEffect(() => {
    const newPosts = posts.filter((post) => post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchedPosts(newPosts);
  }, [searchQuery, posts]);

  return (
    <div>
      <div id="filtering" className="flex justify-center items-center px-12 lg:px-32 w-30 gap-4">
        <div className="flex" onClick={handleSort}>
          <img src="../../public/images/sortArrows.svg" alt="Sort Arrows" className="ml-2 cursor-pointer" />
          <p>Titel</p>
        </div>
        <div className="flex" onClick={handleDateSort}>
          <img src="../../public/images/sortArrows.svg" alt="Sort Arrows" className="ml-2 cursor-pointer" />
          <p>Dato</p>
        </div>
        <div className="flex" onClick={handleDateSort}></div>
        <input type="text" placeholder="Søg efter begreb..." value={searchQuery} onChange={handleSearch} className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none h-8" />
      </div>
      {searchedPosts.map((post) => (
        <PostEntry key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} date={post.date} author={post.author} link={post.link} slug={post.slug} />
      ))}
    </div>
  );
}
