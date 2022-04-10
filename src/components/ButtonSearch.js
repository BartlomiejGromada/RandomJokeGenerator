import { Search } from "@mui/icons-material";
import StyledButton from "../UI/StyledButton";

const ButtonSearch = ({ isLoading, onChandleClick }) => {
  return (
    <StyledButton
      onClick={onChandleClick}
      color="primary"
      text="Szukaj"
      disabled={isLoading ? true : false}
      icon={<Search />}
    />
  );
};

export default ButtonSearch;
