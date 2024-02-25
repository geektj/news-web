import React from "react";
import { StyledImage } from "./assets/style";
import { ImageProps } from "./@types";

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
    />
  );
};

export default Image;
