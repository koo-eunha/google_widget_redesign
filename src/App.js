import { useState } from "react";

import Widget from "./components/Widget/Widget";
import Filter from "./components/Filter/Filter";
import CodeInfos from "./components/CodeInfos/CodeInfos";

import codeData from "./data";
import "./App.css";

function App() {
  const data = codeData;
  const [activeContent, setActiveContent] = useState("1");

  const selectTabHandler = (id) => {
    setActiveContent(id);
  };

  const filteredData = data.filter((item) => {
    return item.id === activeContent;
  });

  return (
    <div className="app-container">
      <Widget>
          <Filter data={data} onSelectTab={selectTabHandler} />
          <CodeInfos data={filteredData} />
      </Widget>
    </div>
  );
}

export default App;
