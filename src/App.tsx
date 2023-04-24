import React, { Suspense, lazy } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/molecules';
import theme from './utils/theme';
const LazyHome = lazy(() => import('@/components/layout/Home'));
const LazyAbout = lazy(() => import('@/components/layout/About'));
const LazyDetailPage = lazy(() => import('@/components/layout/PokemonDetail'));

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
          <Suspense fallback={<div>Loading components ...</div>}>
            <Routes>
              <Route
                path="*"
                element={<Navigate to="/pokemons?page=1" replace />}
              />
              <Route path='/pokemons' element={<LazyHome />} />
              <Route path={`/pokemon/:id`} element={<LazyDetailPage />} />
              <Route path='/about' element={<LazyAbout path='/about' />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
