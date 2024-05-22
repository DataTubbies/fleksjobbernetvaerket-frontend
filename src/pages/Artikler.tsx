import { fetchPosts } from "@/api/wp-rest";
import { useState, useEffect } from "react";
import PostEntry from "@/components/PostEntry";

export default function Artikler() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sortedOrdbog = [...posts].sort((a, b) => {
      const ordA = a.title.toLowerCase();
      const ordB = b.title.toLowerCase();

      if (newDirection === "asc") {
        return ordA < ordB ? -1 : ordA > ordB ? 1 : 0;
      } else {
        return ordA > ordB ? -1 : ordA < ordB ? 1 : 0;
      }
    });

    setPosts(sortedOrdbog);
  };

  useEffect(() => {
    async function getPosts() {
      fetchPosts().then((data) => {
        setPosts(data);
      });
    }
    getPosts();
  }, []);

  return (
    <div>
      <img src="../../public/images/sortArrows.svg" alt="Sort Arrows" onClick={handleSort} className="ml-2 cursor-pointer" />
      <input type="text" placeholder="Søg efter begreb..." value={searchQuery} onChange={handleSearch} className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none w-full h-8" />
      {posts.map((post) => (
        <PostEntry key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} date={post.date} author={post.author} link={post.link} slug={post.slug} />
      ))}
    </div>
  );
}
