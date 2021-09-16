import { useState, useEffect } from "react";
import API_KEY from "./key";

const SEARCH_ENGINE_ID = "73b9138b52ca9563f";

const useGoogleSearch = (searchQuery) => {
  const [data, setData] = useState(null);
  // let start = 1;
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchQuery}&start=${start}`
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchQuery}`

      )
        .then((response) => response.json())
        .then((res) => {setData(res);
        });
    };
    fetchData();
  }, [searchQuery]);
  console.log("use gg: " +data);

  if (data === undefined) {
    return;
  }
  return { data };

};
export default useGoogleSearch;