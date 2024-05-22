import { fetchData } from "@/api/wp-rest";
import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: {
        rendered: string;
    }
    content: {
        rendered: string;
        protected: boolean;
    }
    date: string;
    slug: string;
    
    }
export default function Artikel({ id }: { id: number }) {
    const [post, setPost] = useState<Post>({} as Post);
    
    useEffect(() => {
        async function fetchPost() {
            const data = await fetchData(`posts/${id}?_fields=id,title,content,date,slug`);
            setPost(data);
    }
        fetchPost();
    }
    , []);
    
    
    return (
        <div>
        <h1>{post.title.rendered}</h1>
        </div>
    );
}