import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import styles from "./App.module.css";
import ButtonSearch from "./components/ButtonSearch";
import Joke from "./components/Joke";
import SelectCategory from "./components/SelectCategory";
import Title from "./components/Title";
import useFetchGet from "./hooks/useFetchGet";

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
  const [selectedCategory, setSelectedCategory] = useState("");

  const { isLoading, error, data, fetchAgain } = useFetchGet(
    selectedCategory === ""
      ? "https://api.chucknorris.io/jokes/random"
      : `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`,
    false
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <div className={styles.container}>
          <Title />
          <div className={styles.search}>
            <SelectCategory
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <ButtonSearch isLoading={isLoading} onChandleClick={fetchAgain} />
          </div>
          <Joke isLoading={isLoading} error={error} jokeData={data?.value} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
