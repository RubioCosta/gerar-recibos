import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

// Componenets
import { Spinner } from 'components/Spinner'
import { MenuNavigation } from 'components/MenuNavigation'

// Pages
import Login from 'pages/Login'
import GenerateReceipt from 'pages/GenerateReceipt'
import Dashboard from 'pages/Dashboard'
import UserConfiguration from 'pages/UserConfiguration'
import CheckPayment from 'pages/CheckPayment'

// Context
import { useAuthContext } from 'context/AuthContext'

function App() {
  const { isAuth, isLoading, user } = useAuthContext()

  if (isLoading) return <Spinner color='#00F' loading={isLoading} isCenter={true} />;

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={!isAuth ? <Login /> : <Navigate to='/home/generate-receipt' /> } />

          <Route exact path='/home' element={isAuth ? <MenuNavigation /> : <Navigate to='/'/>}>
            <Route exact index path='generate-receipt' element={<GenerateReceipt />}  />
            <Route exact path='check-payment' element={<CheckPayment />} />
            <Route exact path='dashboard' element={<Dashboard />} />
            <Route exact path='user-configuration' element={<UserConfiguration emailUser={user?.emailFormatted} />} />
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
