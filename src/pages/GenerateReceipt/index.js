
// Styles
import { StyledDiv } from './styles'

// Context
import { useAuthContext } from 'context/AuthContext'

export default function GenerateReceipt() {
  const { logout } = useAuthContext();
  return (
    <StyledDiv>
      <button onClick={() => logout()}>
        sair
      </button>
    </StyledDiv>
  )
}
