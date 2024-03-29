import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cursos from "./pages/Cursos";
import Academias from "./pages/Academias";
import OficinaCurso from "./pages/OficinaCurso";
import OficinaAcademia from "./pages/OficinaAcademia";
import AboutUs from "./pages/AboutUs";
import MeuAprendizado from "./pages/MeuAprendizado";
import MinhasAulas from "./pages/MinhasAulas";
import CursosPendentes from "./pages/CursosPendentes";
import CriacaoCurso from "./pages/CriacaoCurso";
import Configuracoes from "./pages/Configuracoes";
import VisualizacaoCurso from "./pages/VisualizacaoCurso";
import PromocaoCargo from "./pages/PromoçãoCargo";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/meu-aprendizado" Component={MeuAprendizado} />
        <Route path="/cursos" Component={Cursos} />
        <Route path="/oficina-academia" Component={OficinaAcademia} />
        <Route path="/oficina-curso" Component={OficinaCurso} />
        <Route path="/minhas-aulas" Component={MinhasAulas} />
        <Route path="/cursos-pendentes" Component={CursosPendentes} />
        <Route path="/academias" Component={Academias} />
        <Route path="/promocao-cargo" Component={PromocaoCargo} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/criacao-curso" Component={CriacaoCurso} />
        <Route path="/configuracoes" Component={Configuracoes} />
        <Route path="/visualizacao-curso" Component={VisualizacaoCurso} />
      </Routes>
    </Router>
  );
};

export default Rotas;
