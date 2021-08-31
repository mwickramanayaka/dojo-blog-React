import Navbar from "./Navbar";
import Home from "./Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test Automation Hub</title>
        <link rel="canonical" href="https://medium.com/test-automation-hub" />
        <meta name="description" content="Test Automation Hub" />
      </Helmet>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
