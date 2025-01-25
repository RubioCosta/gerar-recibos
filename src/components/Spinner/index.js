import BeatLoader from "react-spinners/BeatLoader";

// Styles
import { StyledSpan } from './styles'

export function Spinner({ color = '#FFFFFF', size = 30, loading = false, isCenter = false }) {
  return (
    <StyledSpan>
      <BeatLoader 
        loading={loading}
        size={size}
        color={color}
        aria-label="Carregando"
        data-testid="loader"
        className={`${isCenter ? 'center' : '' }`}
      />
    </StyledSpan>
  )
}
