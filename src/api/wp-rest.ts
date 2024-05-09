const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

async function fetchPosts() {
  const res = await fetch(`${endpoint}/posts`);
  const data = await res.json();
  return data;
}

export { fetchPosts };
