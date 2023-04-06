import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const InsertBlock = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  .searchBtn {
    width: 80px;
    height: 30px;
    font-size: 1.6rem;
    background-color: #555;
    color: white;
    line-height: 30px;
    padding-top: 0.2rem;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Styledinput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 0;
  background: #121212;
  border: 1px solid #575757;
  color: white;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;
const Insert = ({ search, inputRef }) => {
  function onSubmit(e) {
    e.preventDefault();
    const val = inputRef.current.value;
    search(val);
  }
  return (
    <InsertBlock onSubmit={onSubmit}>
      <Styledinput placeholder="검색" ref={inputRef} />
      <button className="searchBtn">
        <BiSearch />
      </button>
    </InsertBlock>
  );
};

export default Insert;
