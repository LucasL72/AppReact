import Header from "../components/Header";
import Projets from "../components/Folio/Projets";
import QuiSuisje from "../components/Folio/QuiSuisje";
import MainLayout from "../layouts/MainLayout";
import Container from "@mui/material/Container";
import ContactPro from "../components/Folio/ContactPro";
import Banner from "../components/Banner";
import Parcours from "../components/Folio/Parcours";

const Folio = () => {
  return (
    <div>
      <MainLayout>
        <Header />
        <Container>
          <QuiSuisje />
        </Container>
        <Banner />
        <Container>
          <Projets />
        </Container>
        <Banner />
        <Container>
          <Parcours />
          <ContactPro />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Folio;
