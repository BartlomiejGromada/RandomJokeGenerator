import styles from "./App.module.css";
import useFetchGet from "./hooks/useFetchGet";
import Spinner from "./components/Spinner";
import StyledButton from "./components/Button";
import { Search } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9afbfa",
    },
    secondary: {
      main: "#83d0c9",
    },
  },
});

function App() {
  const { setIsFetching, isLoading, error, data } = useFetchGet(
    "https://api.chucknorris.io/jokes/random"
  );

  const handlerGetJoke = () => {
    setIsFetching(true);
  };

  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Random Joke Generator</h1>
          </div>
          <div className={styles.search}>
            <StyledButton
              onClick={handlerGetJoke}
              color="primary"
              text="Szukaj"
              disabled={isLoading ? true : false}
              icon={<Search />}
            />
          </div>
          <div
            className={`${styles.joke} ${
              !isLoading && !error && data ? styles.jokeLoaded : ""
            }`}
          >
            {isLoading && <Spinner />}
            {!isLoading && !error && data && (
              <p className={styles.jokeValue}>{data.value}</p>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
