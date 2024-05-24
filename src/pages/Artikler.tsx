import React, { useState, useEffect } from "react";
import PostEntry from "@/components/PostEntry";

export interface PostType {
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
  thumbbail: string;
}

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="loader">Loading...</div>
  </div>
);

export default function Artikler({ posts }: { posts: PostType[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchedPosts, setSearchedPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state

  const postsPerPage = 10;

  useEffect(() => {
    async function getPosts() {
      setLoading(true); // Start loading
      setTotalPages(Math.ceil(posts.length / postsPerPage));
      setLoading(false); // Stop loading
    }
    getPosts();
  }, []);

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
    const newPosts = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedPosts(newPosts);
    setCurrentPage(1);
    setTotalPages(Math.ceil(newPosts.length / postsPerPage));
  }, [searchQuery, posts]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedPosts = searchedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <div className="px-16 lg:px-32 pt-16">
            <h3 className="text-fleks-blue-dark text-3xl font-semibold mb-6 z-50">
              OVERSIGT OVER ALLE ARTIKLER
            </h3>
          </div>
          <div className="bg-fleks-blue h-64 w-64 rounded-bl-full absolute top-0 right-0"></div>

          <div className="flex justify-center items-center px-12 lg:px-32 w-30 gap-4">
            <div className="flex" onClick={handleSort}>
              <p className="select-none">Titel</p>
              <img
                src="../../public/images/sortArrows.svg"
                alt="Sort Arrows"
                className="ml-2 cursor-pointer w-5 h-5 "
              />
            </div>
            <div className="flex" onClick={handleDateSort}>
              <p className="select-none">Dato</p>
              <img
                src="../../public/images/sortArrows.svg"
                alt="Sort Arrows"
                className="ml-2 cursor-pointer w-5 h-5 "
              />
            </div>
            <input
              type="text"
              placeholder="Søg efter titel..."
              value={searchQuery}
              onChange={handleSearch}
              className="border rounded px-2 hover:border-fleks-blue focus:border-fleks-blue focus:outline-none h-8"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 border rounded disabled:opacity-50"
            >
              ←
            </button>
            <span className="px-4 py-2 mx-2">
              Side {currentPage} af {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 border rounded disabled:opacity-50"
            >
              →
            </button>
          </div>

          <div className="bg-fleks-blue h-1 w-full my-8 px-16 lg:px-32"></div>

          {paginatedPosts.map((post) => (
            <React.Fragment key={post.id}>
              <PostEntry
                title={post.title.rendered}
                excerpt={post.excerpt.rendered}
                date={post.date}
                author={post.author}
                link={post.link}
                slug={post.slug}
              />
              <div className="bg-fleks-blue h-1 w-full my-4 px-16 lg:px-32"></div>
            </React.Fragment>
          ))}

          <div className="flex justify-center mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 border rounded disabled:opacity-50"
            >
              ←
            </button>
            <span className="px-4 py-2 mx-2">
              Side {currentPage} af {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 border rounded disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
