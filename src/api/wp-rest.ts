const endpoint = "https://www.fleksjobbernetvaerket.dk/wp-json/wp/v2";

interface Posts {
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

async function fetchAllPosts() {
  let allPosts = [] as Posts[];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await fetch(`${endpoint}/posts?per_page=10&page=${page}`);
    const data = await res.json();
    totalPages = Number(res.headers.get("X-WP-TotalPages"));
    allPosts = allPosts.concat(data);
    page++;
  }

  return allPosts;
}

async function fetchDataById(id: number, type: string) {
  const res = await fetch(`${endpoint}/${type}/${id}`);
  const data = await res.json();
  return data;
}

async function fetchJobs() {
  const res = await fetch(`${endpoint}/jobopslag?_fields=acf`);
  const data = await res.json();
  return data;
}

async function fetchData(type: string) {
  const res = await fetch(`${endpoint}/${type}`);
  const data = await res.json();
  return data;
}

async function fetchDataByType(type: string, query: string = "") {
  const res = await fetch(`${endpoint}/${type}${query}`);
  const data = await res.json();
  return data;
}

async function fetchTags() {
  const res = await fetch(`${endpoint}/tags?_fields=id,name`);
  const data = await res.json();
  return data;
}

async function fetchImgById(id: number) {
  const res = await fetch(`${endpoint}/media/${id}`);
  const data = await res.json();
  return data;
}

interface ContactForm {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
}

async function submitContactForm(formData: ContactForm) {
  try {
    const response = await fetch(`${endpoint}/kontakt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log("Response:", response); // Log response
    console.log("Response Data:", data); // Log response data

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      console.error("There was an error sending the email!", data);
      alert("There was an error sending the email!");
    }
  } catch (error) {
    console.error("There was an error sending the email!", error);
    alert("There was an error sending the email!");
  }
}

export { fetchDataById, fetchDataByType, fetchData, fetchJobs, fetchTags, fetchImgById, submitContactForm, fetchAllPosts };
