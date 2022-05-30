import React from "react";
import styled from "styled-components";
import Logo from "../../../img/juntube_logo_bl.png";
import Insert from "./insert";

const HeaderBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #171717;
  border-bottom: 1px solid #413c3c;

  color: white;
  .nav {
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;

    .logo {
      width: 100%;
      max-width: 100px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
`;

const Header = ({ onSearch, handleReset, inputRef }) => {
  return (
    <HeaderBlock>
      <div className="nav">
        <div className="logo" onClick={handleReset}>
          <img src={Logo} alt="Juntube Logo" />
        </div>
        <Insert search={onSearch} inputRef={inputRef} />
      </div>
    </HeaderBlock>
  );
};

export default Header;
