import React from "react";
import articles from "./Article-content";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";
const ArticlesListPage = () => {
  return (
    <>
      <h1>articles</h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticlesListPage;
