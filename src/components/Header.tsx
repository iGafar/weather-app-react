import { FC } from "react";
import styled from "styled-components";
import CurrentLocation from "./CurrentLocation";
import Mode from "./Mode";
import Search from "./Search";

const Header: FC = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <Mode />
        <Search />
        <CurrentLocation />
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  max-height: 62px;
  margin-bottom: 50px;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
`;

export default Header;
