import React, { SFC } from "react";
import styled from "styled";
import placeholderImage from "./loadingPlaceholderImage.png";

const LoadingPlaceholder: SFC<{}> = () => (
  <LoadingPlaceholderImage src={placeholderImage} />
);

const LoadingPlaceholderImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: blur(5px);
`;

export default LoadingPlaceholder;
