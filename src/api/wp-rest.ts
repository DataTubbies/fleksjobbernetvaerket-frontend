const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

async function fetchPosts() {
  const res = await fetch(`${endpoint}/posts`);
  const data = await res.json();
  return data;
}

async function fetchJobs() {
  const res = await fetch(`${endpoint}/jobopslag?_fields=acf`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function fetchData(type: string) {
  const res = await fetch(`${endpoint}/${type}`);
  const data = await res.json();
  return data;
}

export { fetchPosts, fetchData, fetchJobs };
