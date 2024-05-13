import WPAPI from "wpapi";

const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

async function fetchPosts() {
  const res = await fetch(`${endpoint}/posts`);
  const data = await res.json();
  return data;
}

async function fetchDataById(id: number, type: string, query: string = "") {
  const res = await fetch(`${endpoint}/${type}/${id}${query}`);
  const data = await res.json();
  return data;
}

export { fetchPosts, fetchDataById };
