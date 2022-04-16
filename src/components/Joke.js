import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import styles from "./Joke.module.css";

const Joke = ({ isLoading, error, jokeData }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (Array.isArray(jokeData?.result)) {
      let randomIndex = Math.floor(Math.random() * jokeData?.result?.length);
      setIndex(randomIndex);
    }
  }, [jokeData?.result]);

  return (
    <div
      className={`${styles.joke} ${
        !isLoading && !error && jokeData ? styles.jokeLoaded : ""
      }`}
    >
      {isLoading && <Spinner />}
      {!isLoading && !error && jokeData && (
        <p className={styles.jokeValue}>
          {Array.isArray(jokeData.result)
            ? jokeData.result[index]?.value
              ? jokeData.result[index]?.value
              : "NO FOUND"
            : jokeData.value}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Joke;
