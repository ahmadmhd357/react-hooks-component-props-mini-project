import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName = {blogData.name} />
      <About {...blogData} />
      <ArticleList  {...blogData} />
    </div>
  );
}

export default App;
