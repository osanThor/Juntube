import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 100%;
  background: #171717;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .contents {
    width: 100%;
    max-width: 1600px;
    height: 100%;
    border-right: 1px solid #413c3c;
    border-left: 1px solid #413c3c;
    display: flex;
    padding: 0 0.7rem;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
const Template = ({ children }) => {
  return (
    <TemplateBlock>
      <div className="contents">{children}</div>
    </TemplateBlock>
  );
};

export default Template;
