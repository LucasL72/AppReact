import React from "react";
import Container from "@mui/material/Container";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Forms from "../components/Articles/Forms";
import ListArticle from "../components/Articles/ListArticle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import Banner from "../components/Banner";

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
        </Container>
        <Banner />
        <Container fixed>
          <Forms />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Home;
