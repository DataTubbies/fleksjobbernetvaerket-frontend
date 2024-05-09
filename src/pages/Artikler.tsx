import { fetchPosts } from "@/api/wp-rest";
import { useState } from "react";
import PostEntry from "@/components/PostEntry";

export default function Artikler() {
  const [posts, setPosts] = useState([]);

  fetchPosts().then((data) => {
    setPosts(data);
  });

  return (
    <div>
      {posts.map((post) => (
        <PostEntry key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} date={post.date} author={post.author} />
      ))}
    </div>
  );
}
