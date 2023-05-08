import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { PokedexProvider } from "./contexts/PokedexProvider";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={
          <PokedexProvider>
            <Home />
          </PokedexProvider>
        } path="/" exact />
      </Routes>
    </BrowserRouter>
  )
}