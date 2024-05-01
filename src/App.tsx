import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import RootLayout from './pages/layout';
import DetailPage from './pages/detail-page';
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");
  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path=':pokemonName' element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
