// importation du fichier css.
import '../App.css';

// importation des composants nécessaires de React Router Dom.
import {Routes, Route} from "react-router-dom";

// importation des composants spécifiques à chaque itinéraires.
import Home from "./Home";
import About from './About';
import Error from "./Error";
import Housing from './Housing';


function App() {
  return (
    // Déclaration des itinéraires pour le routage de l'application
    <Routes>
      {/* Itinéraire pour la page d'accueil, correspondant à la racine "/" */}
      <Route path="/" element={<Home />} />
      {/* Itinéraire pour la page "About" accessible via "/About" */}
      <Route path="/About" element={<About />} />
      {/* Itinéraire pour la page "Housing" avec un paramètre "id" dans l'URL, ex. "/Housing/1" */}
      <Route path="/Housing/:id" element={<Housing />} />
      {/* Itinéraire par défaut pour gérer les URL non correspondantes, on affiche la page d'erreur */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
// Exportation du composant App en tant que composant principal de l'application
export default App;
