import { useEffect, useState } from "react";

const useFetchGet = (url) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      if (isFetching) {
        console.log("FETCHING...");
        setIsLoading(true);

        try {
          const response = await fetch(url, {
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            const json = await response.json();
            setData(json);
          }
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
          setIsFetching(false);
        }
      }
    })();
  }, [isFetching, url]);

  return {
    setIsFetching,
    isLoading,
    error,
    data,
  };
};

export default useFetchGet;
