import "./App.css";
import Header from "./components/header/Header";
import TopForm from "./components/topForm/TopForm";

import Roadmap from "../src/Roadmap/Roadmap";
import TableComponent from "../src/Table/Table";
import Modal from "react-modal";
import WheelOfFortune from "../src/Wheel/WheelOfFortune";
import { useEffect, useState } from "react";

function App() {
  const [Open, setOpen] = useState(false);
  const [Data, setData] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "20%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      color: "white",
      background: "linear-gradient(269.39deg, #141620 1.86%, #102B46 97.36%)",
      borderRadius: "20px",
    },
    overlay: {
      zIndex: 1000,
    },
  };
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setOpen(!Open);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <TopForm Open={Open} Data={Data} setData={setData} setOpen={setOpen} />
        <Roadmap />
        <TableComponent />
        <Modal isOpen={Open} style={customStyles}>
          <WheelOfFortune Open={Open} Data={Data} setData={setData} setOpen={setOpen} />
        </Modal>
      </main>
    </div>
  );
}

export default App;
