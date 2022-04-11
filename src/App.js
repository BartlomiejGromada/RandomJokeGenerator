import { createTheme, ThemeProvider } from "@mui/material";
import { useRef, useState } from "react";
import styles from "./App.module.css";
import ButtonSearch from "./components/ButtonSearch";
import CategoryOrQuery from "./components/CategoryOrQuery";
import Joke from "./components/Joke";
import QuerySearch from "./components/QuerySearch";
import SelectCategory from "./components/SelectCategory";
import Title from "./components/Title";
import useFetchGet from "./hooks/useFetchGet";
import Spinner from "./UI/Spinner";

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
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: categories,
  } = useFetchGet("https://api.chucknorris.io/jokes/categories");

  const queryInputRef = useRef();

  const [showCategory, setShowCategory] = useState(true);
  const [showQuery, setShowQuery] = useState(false);

  const { isLoading, error, data, fetchAgain } = useFetchGet(
    showCategory && selectedCategory !== ""
      ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      : showQuery && queryInputRef.current?.value
      ? `https://api.chucknorris.io/jokes/search?query=${queryInputRef.current?.value}`
      : "https://api.chucknorris.io/jokes/random",
    false
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <div className={styles.container}>
          <Title />
          <div>
            <CategoryOrQuery
              showCategory={showCategory}
              setShowCategory={setShowCategory}
              showQuery={showQuery}
              setShowQuery={setShowQuery}
            />
          </div>
          <div className={styles.search}>
            {showCategory && isLoadingCategories && <Spinner />}
            {showCategory && !errorCategories && categories && (
              <SelectCategory
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            )}
            {showQuery && <QuerySearch ref={queryInputRef} />}
            <ButtonSearch isLoading={isLoading} onChandleClick={fetchAgain} />
          </div>
          <Joke isLoading={isLoading} error={error} jokeData={data?.value} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
