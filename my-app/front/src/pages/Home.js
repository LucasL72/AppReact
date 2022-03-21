import React from "react";
import Container from "@mui/material/Container";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Forms from "../components/Forms";
import ListArticle from "../components/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getArticles } from "../store/actions/ArticlesActions";

const Home = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    console.log("effect getArticles");
    dispatch(getArticles());
  }, []);

  console.log("selectors article", listArticles);
  return (
    <div>
      <MainLayout>
        <Header />
        <Container fixed>
          <ListArticle list={listArticles} />
          <Forms />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Home;
