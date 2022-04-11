import StyledSelect from "../UI/StyledSelect";
import styles from "./SelectCategory.module.css";

const SelectCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <StyledSelect
        items={categories}
        label={"Category"}
        value={selectedCategory}
        onChange={handleChangeCategory}
        className={styles.select}
        labelClassName={styles.selectLabel}
      />
    </div>
  );
};

export default SelectCategory;
