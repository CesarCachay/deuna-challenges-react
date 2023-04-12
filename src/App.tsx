import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/molecules';
import { About, Home } from './components/layout';
import { PokemonDetail } from './components/organisms';
import theme from './utils/theme';

const App: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="*"
              element={<Navigate to="/pokemons?page=1" replace />}
            />
            <Route path='/pokemons' element={<Home />} />
            <Route path={`/pokemon/:id`} element={<PokemonDetail />} />
            <Route path='/about' element={<About path='/about' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
