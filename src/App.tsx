import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
