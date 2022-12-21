import { Route, Routes } from 'react-router-dom';
import { Layout } from './hoc/layout';
import { Home, Login, NotFound } from './pages';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
