import Spinner from "../UI/Spinner";
import styles from "./Joke.module.css";

const Joke = ({ isLoading, error, jokeData }) => {
  return (
    <div
      className={`${styles.joke} ${
        !isLoading && !error && jokeData ? styles.jokeLoaded : ""
      }`}
    >
      {isLoading && <Spinner />}
      {!isLoading && !error && jokeData && (
        <p className={styles.jokeValue}>{jokeData}</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Joke;
