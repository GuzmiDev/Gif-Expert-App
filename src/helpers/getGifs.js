export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=Enl8qUBt85eIPednpHcAZxPM8RS1R3wf&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title || "sin titulo",
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
