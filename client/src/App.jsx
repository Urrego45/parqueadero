import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/Users/UserPage';

import ProtectedRoute from './ProtectedRoute'

import { UserProvider } from './context/UserContext';
import { Navbar } from "./components/Navbar";



function App() {
  return (
    <AuthProvider>

      <UserProvider>
        <BrowserRouter>

          <main className='container mx-auto px-10'>

            <Navbar />

            <Routes>
              <Route path='/' element={<LoginPage />} />

              <Route element={<ProtectedRoute />}>

                
                <Route path='/home' element={<HomePage />} />
                <Route path='/users' element={<UserPage />} />

              </Route>

            </Routes>



          </main>

        </BrowserRouter>
      </UserProvider>

    </AuthProvider>

  )
}

export default App