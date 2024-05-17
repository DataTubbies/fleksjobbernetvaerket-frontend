const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

async function fetchPosts() {
  const res = await fetch(`${endpoint}/posts`);
  const data = await res.json();
  return data;
}


async function fetchDataById(id: number, type: string) {
  const res = await fetch(`${endpoint}/${type}/${id}`);
  const data = await res.json();
  return data;
}


async function fetchData(type: string) {
  const res = await fetch(`${endpoint}/${type}`);
  const data = await res.json();
  return data;
}

export { fetchPosts, fetchDataById, fetchData };


export { fetchPosts, fetchData };

