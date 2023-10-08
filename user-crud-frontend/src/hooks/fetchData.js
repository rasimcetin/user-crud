import axios from "axios";
import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setData(null);
        setIsLoading(false);
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error, setData };
}

export default useFetchData;
