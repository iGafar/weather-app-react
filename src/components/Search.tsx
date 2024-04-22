import { FC } from "react";
import styled from "styled-components";

const Search: FC = () => {
  return (
    <SearchStyle>
      <img src="./icons/search.png" alt="search" />
      <input type="text" placeholder="Search for your preffered city..." />
    </SearchStyle>
  );
};

const SearchStyle = styled.label`
  border-radius: 40px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);
  background: rgb(68, 68, 68);
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 27px;
  display: flex;
  gap: 29px;
  padding: 8px 33px;
  max-height: 62px;

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    line-height: 27px;
  }
`;

export default Search;
