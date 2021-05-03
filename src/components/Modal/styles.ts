import styled from "@emotion/styled";

export const ModalWrapper = styled("div")`
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const Content = styled("div")`
  height: fit-content;
  width: fit-content;
  border-radius: ${({ theme }) => theme?.miscellaneous?.borderRadiusL};
  background-color: ${({ theme }) => theme?.designTokens?.surface};
`;
