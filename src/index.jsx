import "./sass/global.sass";
import React from "react";
import ReactDOM from "react-dom/client";
import Topbar from "./components/Topbar";
import TopMenubar from "./components/TopMenubar";
import ContentBody from "./components/ContentBody";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="bg-slate-100">
      <Topbar />
      <TopMenubar />
      <ContentBody />
    </div>
  </>
);
