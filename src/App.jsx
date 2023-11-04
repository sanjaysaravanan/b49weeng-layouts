import { useState } from "react";
import "./App.css";

function App() {
  const [leftOpen, setLeftOpen] = useState(false);

  const handleOpen = () => {
    setLeftOpen(!leftOpen);
  };

  return (
    <>
      {console.log(leftOpen)}
      <header className="app-header">
        <button type="button" onClick={handleOpen}>
          <i className="fa-solid fa-bars mobile-only"></i>
        </button>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-facebook-messenger"></i>
      </header>
      <div className="content">
        <aside
          className={`sidebar left-bar ${leftOpen ? "open-left-bar" : ""}`}
        ></aside>
        <aside className="sidebar right-bar"></aside>
        <main className="main-content"></main>
      </div>
    </>
  );
}

export default App;
