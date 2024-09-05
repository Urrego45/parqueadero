import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/Users/UserPage';

import BusinessPage from './pages/Business/BusinessPage';
import ParkedPage from './pages/Parked/ParkedPage';
import ParkingPage from './pages/Parking/ParkingPage';
import PricePage from './pages/Price/PricePage';
import SettingsVehiclesPage from './pages/SettingsVehicles/SettingsVehiclesPage';
import UserParkingPage from './pages/UserParking/UserParking';

import ProtectedRoute from './ProtectedRoute'

import { UserProvider } from './context/UserContext';

import { BusinessProvider } from './context/BusinessContext';
import { ParkedProvider } from './context/ParkedContext';
import { ParkingProvider } from './context/ParkingContext';
import { PriceProvider } from './context/PriceContext';
import { SettingVehicleProvider } from './context/SettingsVehicleContext';


import { Navbar } from "./components/Navbar";



function App() {
  return (
    <AuthProvider>

      <UserProvider>
      <BusinessProvider>
      <ParkedProvider>
      <ParkingProvider>
      <PriceProvider>
      <SettingVehicleProvider>

        <BrowserRouter>

          <main className='container mx-auto px-10'>

            <Navbar />

            <Routes>
              <Route path='/' element={<LoginPage />} />

              <Route element={<ProtectedRoute />}>

                
                <Route path='/home' element={<HomePage />} />
                <Route path='/users' element={<UserPage />} />

                <Route path='/business' element={<BusinessPage />} />
                <Route path='/parked' element={<ParkedPage />} />
                <Route path='/parking' element={<ParkingPage />} />
                <Route path='/price' element={<PricePage />} />
                <Route path='/settings-vehicle' element={<SettingsVehiclesPage />} />
                <Route path='/user-parking' element={<UserParkingPage />} />

              </Route>

            </Routes>



          </main>

        </BrowserRouter>

      </SettingVehicleProvider>
      </PriceProvider>
      </ParkingProvider>
      </ParkedProvider>
      </BusinessProvider>
      </UserProvider>

    </AuthProvider>

  )
}

export default App