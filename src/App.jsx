import "./App.css";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <div className="container vh-100">
        <div style={{ minHeight: "800px" }}></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
