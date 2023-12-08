export async function randomImage(word) {
  const queryWord = word.replace(" ", "").toLowerCase();
  try {
    const res = await fetch(
      `https://source.unsplash.com/random/1600x1200/?${queryWord}`
    );
    return res.url;
  } catch (error) {
    console.error(error);
  }
}
