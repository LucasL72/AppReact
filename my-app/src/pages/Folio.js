import Header from "../components/Header";
import Projets from "../components/Projets";
import QuiSuisje from "../components/QuiSuisje";
import MainLayout from "../layouts/MainLayout";
import Container from "@mui/material/Container";
import ContactPro from "../components/ContactPro";
import Banner from "../components/Banner";

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
          <ContactPro />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Folio;
