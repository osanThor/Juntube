import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 100%;
  background: #070000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .contents {
    width: 100%;
    max-width: 800px;
    height: 100%;
    border-right: 1px solid white;
    border-left: 1px solid white;
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
