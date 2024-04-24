import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";

const Search: FC = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <SearchStyle $mode={mode}>
      <img src="./icons/search.png" alt="search" />
      <input type="text" placeholder="Search for your preffered city..." />
    </SearchStyle>
  );
};

const SearchStyle = styled.label<{ $mode: boolean }>`
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  background: var(--primary-color);
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  gap: 29px;
  padding: 8px 33px;
  max-height: 62px;
  border: ${(props) => (props.$mode ? "" : "1px solid rgb(0, 0, 0);")};

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    color: ${(props) =>
      props.$mode ? "rgba(255, 255, 255, 0.6)" : "rgb(41, 41, 41)"};
    font-size: 18px;
    line-height: 27px;
  }
`;

export default Search;
