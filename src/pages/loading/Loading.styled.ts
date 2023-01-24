import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const LoadingStyled = styled.div`
  padding-top: 30vh;
  width: 100%;
  min-height: 100vh;
`;
export const LoadingImageBlock = styled.div`
  width: 50vw;
  margin: 0 auto;
  position: relative;
`;

export const LoadingOrangeBlock = keyframes`
0% {
  top: 0;
  left: 50%;
}
20% {
  top: 20%;
  left: 75%;
}

40% {
  top: 50%;
  left: 90%
}
50% {
  top: 95%;
  left: 50%; 
}

60% {
  top: 75%;
  left: 40%;
}

80% {
  top: 40%;
  left: 30%;
}

100% {
  top: 0;
  left: 50%
}


`;
export const LoadingImage = styled.img`
  width: 20vw;
  position: absolute;
  top: 0;
  left: 50%;
  animation-name: ${LoadingOrangeBlock};
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;
`;
export const spin = keyframes`
0% { 
  transform: rotate(0deg);
 }
  100% { 
    transform: rotate(360deg); 
  }

`;
export const LoadingBlockCSS = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation-name: ${spin};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  margin: 0 auto;
`;
