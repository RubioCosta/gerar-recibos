// Styles
import { StyledDiv } from './styles'

export function Button({
  description,
  onChange
}) {
  return (
    <StyledDiv>
      <button 
        onChange={onChange}
      >
        {description}
      </button>
    </StyledDiv>
  )
}

export function LoginGoogle({
  description,
  action
}) {
  return (
    <StyledDiv>
      <button 
        onClick={action}
        className='login-google'
      >
        <i className="bi bi-google"></i>
        {description}
      </button>
    </StyledDiv>
  )
}