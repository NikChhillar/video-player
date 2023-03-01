import React from "react";
import styled from "styled-components";

//
//
const Button = ({ name, onClick, icon, bg, type, disabled }) => {
  return (
    <ButtonStyled
      style={{
        background: bg,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
};

//
//
const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.4s ease;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 700px) {
    gap: 0.5rem;
  }
`;

export default Button;