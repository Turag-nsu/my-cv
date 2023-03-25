import React from "react";
import styled from "@emotion/styled";
import  {keyframes}  from "@emotion/react";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100em);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  animation: ${fadeIn} 0.8s ease-in-out;
  border-radius: 50%;
  height: 300px;
  // margin-left: 30px;
  margin-bottom: 30px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const App = () => {
  return (
    <ImageWrapper>
      <Image src="https://media.licdn.com/dms/image/C5103AQHzfiXC78c4UA/profile-displayphoto-shrink_800_800/0/1580973319636?e=1682553600&v=beta&t=jGV1Dn4dLqqA-c_CGG1ShH1LnQBz9ZwOrz-oHAXXKrQ" alt="Turag" />
    </ImageWrapper>
  );
};

export default App;
