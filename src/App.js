import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Charts from "./components/Chart/chart";
import DisplayCard from "./components/Chart/display";
import PostData from "./components/rawData.json";
import DataCard from "./components/detailCards/dataCard";
import DataTable from "./components/DataTable/dataTable";
let map1 = new Map([
  [1, "Vague"],
  [2, "Early stage"],
  [3, "Gaining Traction"],
  [4, "Evolving"],
  [5, "Established"],
  [6, "Expansionary"],
  [7, "Growing"]
]);

let map2 = new Map([
  [1, "Potential"],
  [2, "Possible"],
  [3, "Probabble"],
  [4, "Business as Usual"]
]);

function App() {
  const [value, setValue] = useState("sector");
  const [side, setSide] = useState("Click on Word");

  const [occur, setOccur] = useState("");
  const [likehood, setLikeHood] = useState("");
  const [relev, setRelev] = useState({});
  const [article, setArticle] = useState("");
  const [impact, setImpact] = useState();
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = text => {
    //changing filter
    setValue(text);
  };

  const handleSideData = (text, value, state) => {
    setSide(text);
    setOccur(value);
    relev_likli_Change(text);
    setOpen(state);
  };

  const relev_likli_Change = text => {
    for (let item of PostData) {
      if (
        item.sector === text ||
        item.topic === text ||
        item.country === text ||
        item.region === text ||
        item.pestle === text
      ) {
        setRelev({ key: item.relevance, value: map1.get(item.relevance) });
        setLikeHood(map2.get(item.likelihood));
        setArticle(item.title);
        setImpact(item.intensity / (item.relevance * item.likelihood));
        setLink(item.url);
        break;
      }
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="cards" style={{ marginTop: 20 }}>
        <Charts filter={value} onSideDataChange={handleSideData} />

        <DisplayCard
          sideData={side}
          freq={occur}
          relevance={relev}
          likelihood={likehood}
          title={article}
          impact={impact}
          open={open}
          filter={value}
          onFilterChange={handleChange}
          link={link}
        />
      </div>
      <div
        style={{
          marginTop: 50,
          marginBottom: 18,
          marginLeft: 25,
          color: "white",
          fontWeight: "normal"
        }}
      >{`TOP TEN ${value.toLocaleUpperCase()}`}</div>
      <div>
        <DataCard filter={value} link={link} />
      </div>
      <br />
      <div style={{ margin: 20 }}>
        <DataTable />
      </div>
    </div>
  );
}

export default App;
