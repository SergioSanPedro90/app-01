export async function getLatestGames() {
  // 1. URL de la API de Metacritic
  const LATEST_GAMES = "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";
  
  // 2. Hace la petición HTTP a la API
  const rawData = await fetch(LATEST_GAMES);
  
  // 3. Convierte la respuesta a JSON
  const json = await rawData.json();
  
  // 4. Extrae solo los "items" del objeto JSON
  // Destructuring: saca data.items
  const { data: { items } } = json;
  
  // 5. Transforma cada juego al formato que necesitas
  return items.map((item) => {
    // Extrae las propiedades que necesitas de cada juego
    const { description, slug, releaseDate, image, criticScoreSummary, title } = item;
    const { score } = criticScoreSummary;
    
    // Construye la URL completa de la imagen
    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
    
    // Devuelve un objeto limpio con solo lo que necesitas
    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  });
}

export async function getGameDetails(slug) {
  // 1. URL dinámica con el slug del juego
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;
  
  // 2. Fetch a la API
  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();
  
  // 3. Extrae los componentes
  const { components } = json;
  
  // 4. Del primer componente saca info básica
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;
  
  // 5. Busca la imagen tipo "cardImage" en el array de imágenes
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
  
  // 6. Del componente 3 saca las reviews
  const rawReviews = components[3].data.items;
  
  // 7. Mapea las reviews a un formato limpio
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });
  
  // 8. Devuelve todo junto
  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}