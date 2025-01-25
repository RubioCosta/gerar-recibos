import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

// Pages
import Login from 'pages/Login'
import GenerateReceipt from 'pages/GenerateReceipt'

// Context
import { useAuthContext } from 'context/AuthContext'

function App() {
  const { isAuth, isLoading } = useAuthContext()

  if (isLoading) return;

  return (
    <BrowserRouter>
      <Routes>
          <Route exact index element={!isAuth ? <Login /> : <Navigate to='/home' /> } />
          <Route exact path='/home'>
            <Route exact index element={isAuth ? <GenerateReceipt /> : <Navigate to='/' /> }  />  
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
