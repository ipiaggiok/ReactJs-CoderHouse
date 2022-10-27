import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Este es el 1er item del contenedor" />
      <ItemListContainer greeting="Este es el 2do del contenedor" />
    </>
  );
};

export default App;
