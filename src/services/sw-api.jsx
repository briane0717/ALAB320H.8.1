export async function getAllStarships() {
  const baseUrl = "https://swapi.py4e.com/api/starships/";
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) throw new Error("We're lost 😐");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("There's nothing here", error);
    return [];
  }
}
