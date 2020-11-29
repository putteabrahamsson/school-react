import React from "react";
import styled, { css } from "styled-components";

const PrimaryButton = () => {
  const Button = styled.button`
    background: blue;
    width: 50px;
    margin-left: 30px;
    height: 50px;
    border: 0;

    ${(props) =>
      props.primary &&
      css`
        background: orange;
        color: white;
      `};
  `;

  return (
    <>
      <Button primary />
      <Button />
    </>
  );
};

export default PrimaryButton;
