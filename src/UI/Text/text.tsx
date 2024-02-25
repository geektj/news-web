import React from "react";
import { TextProps } from "./@types";
import { StyledText } from "./assets/style";


const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
