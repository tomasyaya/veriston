import { Main } from "./views/Main";
import { Layout } from "./layout";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
