const API_URL = "https://m9ysjv-8081.csb.app";

function fetchModel(url) {
  return fetch(API_URL + url).then((res) => {
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  });
}

export default fetchModel;
