import React from "react";
import { ButtonProps } from "./@types";
import { StyledButton } from "./assets/style";

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  bgColor,
  borderRadius,
  border,
  children,
  onClick,
}) => {
    
  return (
    <StyledButton
      width={width}
      height={height}
      bgColor={bgColor}
      border={border}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
