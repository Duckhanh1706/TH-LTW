function fetchModel(url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export default fetchModel;
