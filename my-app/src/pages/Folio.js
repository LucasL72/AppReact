import Header from "../components/Header";
import Projets from "../components/Projets";
import QuiSuisje from "../components/QuiSuisje";
import MainLayout from "../layouts/MainLayout";
import Container from "@mui/material/Container";
import ContactPro from "../components/ContactPro";

const Folio = () => {
  return (
    <div>
      <MainLayout>
        <Header />
        <Container>
          <QuiSuisje />
          <Projets />
          <ContactPro />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Folio;
