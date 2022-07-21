const API_URL = 'http://localhost:8000';

async function httpGetCategories() {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();

  return data;
}

export { httpGetCategories };
