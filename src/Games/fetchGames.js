export default async function fetchGames(url) {
  try {
    const response = await fetch(url);
    const games = await response.json();
    return games;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
