import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import ProtectedRoute from './ProtectedRoute'
// import { Navbar } from "./components/Navbar";



function App() {
  return (
    <AuthProvider>


      <BrowserRouter>

        <main className='container mx-auto px-10'>

          <Routes>
            <Route path='/' element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>

              

              <Route path='/home' element={<HomePage />} />

            </Route>

          </Routes>



        </main>

      </BrowserRouter>
    </AuthProvider>

  )
}

export default App