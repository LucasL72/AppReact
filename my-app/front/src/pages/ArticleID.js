import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Banner from "../components/Banner";

const ArticleID = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  }, [navigate, state]);

  return (
    <MainLayout>
      <Header />
      <Container>
        <>
          <h1 className="text-center text-decoration-underline">
            {state && state.item.title}
          </h1>
          <img
            className="img-fluid"
            src="../img/creative1.jpg"
            alt="creative1"
          ></img>
          <h2 className="text-decoration-underline"> Description: </h2>
          <p>{state && state.item.description}</p>
        </>
      </Container>
      <Banner />
    </MainLayout>
  );
};

export default ArticleID;
