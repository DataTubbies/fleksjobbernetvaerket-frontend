import { fetchPosts, fetchTags } from "@/api/wp-rest";
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
  const [posts, setPosts] = useState<PostType[]>([] as PostType[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [tags, setTags] = useState([] as string[]);
  const [searchedPosts, setSearchedPosts] = useState([] as PostType[]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(searchQuery);
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

  useEffect(() => {
    async function getPosts() {
      fetchPosts().then((data) => {
        setPosts(data);
        setSearchedPosts(data);
      });
    }
    getPosts();
  }, []);

  useEffect(() => {
    async function getTags() {
      fetchTags().then((data) => {
        setTags(data);
      });
    }
    getPosts();
  }, []);

  useEffect(() => {
    const newPosts = posts.filter((post) => post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()));

    setSearchedPosts(newPosts);
  }, [searchQuery]);

  return (
    <div>
      <div id="filtering" className="flex justify-between items-center">
        <img src="../../public/images/sortArrows.svg" alt="Sort Arrows" onClick={handleSort} className="ml-2 cursor-pointer" />
        <input type="text" placeholder="Søg efter begreb..." value={searchQuery} onChange={handleSearch} className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none w-full h-8" />
      </div>
      {searchedPosts.map((post) => (
        <PostEntry key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} date={post.date} author={post.author} link={post.link} slug={post.slug} />
      ))}
    </div>
  );
}
