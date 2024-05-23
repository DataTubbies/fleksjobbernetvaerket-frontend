import { fetchData } from "@/api/wp-rest";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  slug: string;
}

export default function Artikel() {
  const { slug } = useParams<{ slug: string }>(); // Get the slug from the URL parameters
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState<HTMLElement | null>(null);

  useEffect(() => {
    async function fetchPostBySlug() {
      // Fetch the post using the slug to get the ID
      const data = await fetchData(`posts?slug=${slug}&_fields=id`);
      const id = data[0]?.id;
      if (id) {
        const postData = await fetchData(`posts/${id}?_fields=id,title,content,date,slug`);
        setPost(postData);

      }
    }
    fetchPostBySlug();
}, [slug]);

if (!post) {
    return <div>Loading...</div>;
}




return (
    <div className="px-32 py-12">
    <h2 className="text-3xl mb-16">{post.title.rendered}</h2>
    <div className="bg-fleks-yellow h-1 w-full my-8"></div>
    <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    <div className="bg-fleks-yellow h-1 w-full my-8"></div>
    </div>
);
}