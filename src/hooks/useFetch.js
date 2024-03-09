import { useEffect, useState } from "react";

const useFetch = (apiUrl) => {
  const [result, setResult] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjhlZjYxMzhjNTQ3MThmZGZkY2YwYWNlYTgwYzYzMiIsInN1YiI6IjY1ZTFmZDg3YTM5ZDBiMDE0OTA3YTllYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBpzqgbBfloFg3-CWrDAsG-trHdGS775BVhGy26ZFbs"
    },
  };

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl, options)
        .then((data) => data.json())
        // .then(response => console.log(response))
        .then((dataParsed) => setResult(dataParsed))
        .catch(err => console.error(err));
    }
  }, [apiUrl]);
  return [result];
};

export default useFetch;
