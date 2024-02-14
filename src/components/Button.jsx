import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return (
    <StyledButton
      primary={props.primary}
      width={props.width}
      height={props.height}
      font={props.fontSize}
      onClick={props.onClick}
    >
      <span>{props.content}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: ${(props) => (props.height ? `${props.height}px` : '50px')};

  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.font ? `${props.font}px` : '15px')};

  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  line-height: 42px;
  padding: 0;
  border: none;
  background: ${(props) => (props.primary ? 'green' : 'red')};
`;

export default Button;
