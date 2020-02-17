// @flow
import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const StyledButton = styled.button`
  background: ${props => props.theme.color.gray};
  color: white;
  border: none;
  border-radius: 5px;

  &.normal {
    padding: 10px;
    font-size: 12px;
  }

  &.medium {
    padding: 15px;
    font-size: 15px;
  }

  &.underline {
    background: white;
    border: 1px solid ${props => props.theme.color.gray};
    color: ${props => props.theme.color.gray};
  }
`;

type Props = {
  children: any,
  size: "normal" | "medium" | "small",
  underline: boolean,
  className?: string,
  onClick: () => void
};

const Button = ({ size, underline, children, className, onClick }: Props) => {
  const btnClass = classnames({ [`${size}`]: size, underline }, className);

  return (
    <StyledButton className={btnClass} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: "normal",
  underline: false
};

export default Button;
