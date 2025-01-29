import { Spinner } from 'components/Spinner'

// Styles
import { StyledDiv } from './styles'

export function Button({
  description,
  onChange,
  isLoading = false
}) {
  return (
    <StyledDiv>
      <button 
        onChange={onChange}
      >
        <Spinner loading={isLoading} size={5} />
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

export function LoginSearch({
  description,
  action
}) {
  return (
    <StyledDiv>
      <button 
        onClick={action}
        className='btn-search'
      >
        <i className="bi bi-search"></i>
        {description}
      </button>
    </StyledDiv>
  )
}
