import React from "react";
import mockData from "./mock";

function App() {
  return (
    <main style={{ padding: 50, color: "#fff", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1>{mockData.hero.headline}</h1>
      <p>{mockData.hero.subheadline}</p>
      <p>{mockData.hero.description}</p>
    </main>
  );
}

export default App;