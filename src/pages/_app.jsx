import 'styles/global.css'

// Context
import { AuthContextPtovider } from 'context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <AuthContextPtovider>
      <Component {...pageProps} />
    </AuthContextPtovider>
  )
}
