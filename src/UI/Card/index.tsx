import React from "react";
import { CardProps } from "./@types";
import { StyledCard } from "./assets/style";

const Card: React.FC<CardProps> = ({
  width,
  height,
  boxShadow,
  bgColor,
  border,
  borderRadius,
  children,
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      boxShadow={boxShadow}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
