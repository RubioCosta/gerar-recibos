import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from 'services/firebase'
import Cookies from 'js-cookie'

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [ user, setUser ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isAuth, setIsAuth ] = useState(false)

  async function login(email, password) {
    try {
      setIsLoading(true);
      const response = await await auth.signInWithEmailAndPassword(auth.getAuth(), email, password);
      await configureSession(response.user);
    } catch(error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function register(email, password) {
    try {
      setIsLoading(true);
      const response = await auth.createUserWithEmailAndPassword(auth.getAuth(), email, password);
      await configureSession(response.user);
    } catch(error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setIsLoading(true);
      const response = await auth.signInWithPopup(auth.getAuth(), new auth.GoogleAuthProvider());
      await configureSession(response.user);
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await auth.getAuth().signOut();
    } catch (error) {
      throw error
    } finally {
      setIsAuth(false);
      setUser({});
      manageCookie(false)
    }
  }

  async function normalizedUser(userData) {
    const token = await userData.getIdToken();

    return {
      uid: userData.uid,
      nome: userData.displayName,
      email: userData.email,
      emailFormatted: userData.email.replace('@', '-at-').replace('.', '-dot-'),
      token,
      provedor: userData.providerData[0]?.providerId,
      imagemUrl: userData.photoURL
    }
  }

  function manageCookie(auth) {
    if (auth) {
      Cookies.set('auth', auth, {
        expires: 7
      })
    } else {
      Cookies.remove('auth')
    }
    setIsLoading(false)
  }

  async function configureSession(userData) {
    if (userData?.email) {
      const userFormatted = await normalizedUser(userData)
      setUser(userFormatted)
      manageCookie(true)
      setIsAuth(true);
      return userFormatted.email
    } else {
      setIsAuth(false);
      setUser(null)
      manageCookie(false)
      return false
    }
  }

  useEffect(() => {
    setIsLoading(true)
    if (Cookies.get('auth')) {
      const cancelar = auth.getAuth().onIdTokenChanged(configureSession)
      return () => cancelar()
    }

    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ login, register, loginGoogle, logout, user, isLoading, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}