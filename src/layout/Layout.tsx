import { Container } from "./styles";
import { LayoutProps } from "./types";
function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;
