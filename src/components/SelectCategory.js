import useFetchGet from "../hooks/useFetchGet";
import Spinner from "../UI/Spinner";
import StyledSelect from "../UI/StyledSelect";
import styles from "./SelectCategory.module.css";

const SelectCategory = ({ selectedCategory, setSelectedCategory }) => {
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const {
    isLoading,
    error,
    data: categories,
  } = useFetchGet("https://api.chucknorris.io/jokes/categories");

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && !error && categories && (
        <StyledSelect
          items={categories}
          label={"Category"}
          value={selectedCategory}
          onChange={handleChangeCategory}
          className={styles.select}
          labelClassName={styles.selectLabel}
        />
      )}
    </div>
  );
};

export default SelectCategory;
