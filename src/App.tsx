import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
function App() {
  const id = 20;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path={`/pokemon/:${id}`} element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
