import { fetchPosts } from "@/api/wp-rest";
import { useState, useEffect } from "react";
import PostEntry from "@/components/PostEntry";

export default function Artikler() {
  const [posts, setPosts] = useState([]);

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
      {posts.map((post) => (
        <PostEntry key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} date={post.date} author={post.author} />
      ))}
    </div>
  );
}
