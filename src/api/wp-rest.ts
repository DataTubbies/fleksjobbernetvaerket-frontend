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

async function submitContactForm(formData: any) {
  try {
    const response = await fetch(`${endpoint}/kontakt`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
  });

  const data = await response.json();

  console.log('Response:', response); // Log response
  console.log('Response Data:', data); // Log response data

  if (response.ok) {
      alert('Email sent successfully');
  } else {
      console.error('There was an error sending the email!', data);
      alert('There was an error sending the email!');
  }
} catch (error) {
  console.error('There was an error sending the email!', error);
  alert('There was an error sending the email!');
}

}

export { fetchPosts, fetchDataById, fetchDataByType, fetchData, fetchJobs, submitContactForm };
