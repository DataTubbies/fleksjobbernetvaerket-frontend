import WPAPI from "wpapi";

const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

async function fetchPosts() {
  const res = await fetch(`${endpoint}/posts`);
  const data = await res.json();
  return data;
}

async function fetchJobs() {
  const res = await fetch(`${endpoint}/pages/14576?_fields=id,title,content`);
  const data = await res.json();
  return data;
}

export { fetchPosts, fetchJobs };
