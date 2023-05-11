import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { PokedexProvider } from "./contexts/PokedexProvider";
import { Information } from "./pages/Information";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <PokedexProvider>
            <Home />
          </PokedexProvider>
        } path="/" exact />

         <Route element={
          <PokedexProvider>
            <Information />
          </PokedexProvider>
        } path="/Information/:pokemonId"/> 
      </Routes>
    </BrowserRouter>
  )
}