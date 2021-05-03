import React from "react";
import { Loader } from "../Loader";
import styled from "@emotion/styled";

interface SuspenseProps {
  children: React.ReactNode;
  loading?: boolean;
}

const Container = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Suspense({ loading, children }: SuspenseProps) {
  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default Suspense;
