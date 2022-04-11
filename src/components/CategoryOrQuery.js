import StyledCheckbox from "../UI/StyledCheckbox";

const CategoryOrQuery = ({
  showCategory,
  setShowCategory,
  showQuery,
  setShowQuery,
}) => {
  const handleChangeCategory = (event) => {
    let checked = event.target.checked;
    setShowCategory(checked);
    setShowQuery(!checked);
  };
  const handleChangeQuery = (event) => {
    let checked = event.target.checked;
    setShowQuery(checked);
    setShowCategory(!checked);
  };

  return (
    <>
      <StyledCheckbox
        label="CATEGORY"
        checked={showCategory}
        onChange={handleChangeCategory}
      />
      <StyledCheckbox
        label="QUERY"
        onChange={handleChangeQuery}
        checked={showQuery}
      />
    </>
  );
};

export default CategoryOrQuery;
